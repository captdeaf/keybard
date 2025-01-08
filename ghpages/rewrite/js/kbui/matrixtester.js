////////////////////////////////////
//
//  Matrix tester - render a board into #matrixboard and update it
//  w/ keypresses ... while mouse is inside the test button.
//
////////////////////////////////////

const MATRIX = {
  // poll: poll and report differences.
  poll: null,
};

addInitializer('connected', () => {
  let cur = null;

  let rowbytes = Math.ceil(KBINFO.cols / 8);

  ////////////////////////////////////
  //
  //  Render matrix keys into #matrixboard, for the matrix tester.
  //
  ///////////////////////////////////
  function renderMatrixKey(kmid, opts) {
    const style = {
      top: ((opts.y) * 35 + 20) + 'px',
      left: ((opts.x) * 35 + 20) + 'px',
      width: (opts.width * 30 + ((opts.width - 1)*5)) + 'px',
      height: (opts.height * 30 + ((opts.height - 1)*5)) + 'px',
      'min-width': (opts.width * 30 + ((opts.width - 1)*5)) + 'px',
      'min-height': (opts.height * 30 + ((opts.height - 1)*5)) + 'px',
      position: 'absolute',
    };
    if (opts.r) {
      style.transform = 'rotate(' + opts.r + 'deg)';
    }
    const keyimage = EL('div', {
      class: 'key',
      'data-kmid': kmid,
      style: style,
    }, ' ');

    return keyimage;
  }
  const matrixboard = get('#matrixboard');

  function renderMatrix() {
    // allkeys is [row][col]
    const allkeys = {};
    for (let row = 0; row < KBINFO.rows; row++) {
      allkeys[row] = {};
    }
    const els = [];
    for (const [kmid, key] of Object.entries(KBINFO.keylayout)) {
      const mat = renderMatrixKey(kmid, key);
      allkeys[key.row][key.col] = mat;
      els.push(mat);
    }

    appendChildren(matrixboard, els);

    return allkeys;
  }

  const matrixKeys = renderMatrix();
  const pollButton = get('[data-action="matrix-poll"]');

  let keepPolling = false;

  ////////////////////////////////////
  //
  //  The actual polling of the keyboard matrix.
  //
  ////////////////////////////////////
  function clearPoll() {
    keepPolling = false;
    pollButton.innerText = "Begin Poll";
  }
  MATRIX.poll = async () => {
    const data = await Vial.pollMatrix(KBINFO);
    for (let row = 0; row < KBINFO.rows; row++) {
      for (let col = 0; col < KBINFO.cols; col++) {
        const mkey = matrixKeys[row][col];
        if (mkey) {
          if (data[row][col]) {
            mkey.classList.add('active');
            mkey.classList.add('changed');
          } else {
            mkey.classList.remove('active');
          }
        }
      }
    }
    if (matrixboard.getBoundingClientRect().width < 10) {
      clearPoll();
    }
    if (keepPolling) {
      setTimeout(MATRIX.poll, 10);
    }
  }

  ACTION.onclick('[data-action="matrix-poll"]', (target) => {
    target.focus();
    if (!keepPolling) {
      target.onkeydown = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        return false;
      };
      setTimeout(() => {
        pollButton.innerText = "End Poll";
        keepPolling = true;
        MATRIX.poll();
      }, 10);
    } else {
      clearPoll();
    }
  });
});
