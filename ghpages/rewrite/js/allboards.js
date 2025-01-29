function displayBoard(name, doNotSave, alternateTitle) {
  const allboards = {};
  const allboardsContainer = get('#allboards');
  const sidebarSelector = get('#sidebar');

  for (const sel of getAll('.board-sel[data-board]')) {
    allboards[sel.dataset.board] = {
      selector: sel,
    };
  }

  for (const container of getAll('div.board-map[data-board]')) {
    allboards[container.dataset.board].container = container;
  }

  // const allTabs = getAll(".main-select");
  const allContainers = getAll('.main-container');
  console.log('displayBoard', name);
  const currentBoard = getSaved('boardsel');
  console.log('currentBoard', currentBoard);
  if (!doNotSave) setSaved('boardsel', name);
  if (name === 'keyoverride-container') return;
  allboardsContainer.style['display'] = 'block';
  sidebarSelector.classList.add('active');
  for (const board of Object.values(allboards)) {
    // board.selector.classList.remove('active');
    board.container.style['display'] = 'none';
  }
  // allboards[name].selector.classList.add('active');
  allboards[name].container.style['display'] = 'block';
  const boardTitle = get('#board-title');
  boardTitle.innerText = BOARD_NAMES[name];
  if (alternateTitle) boardTitle.innerText = alternateTitle;
  // hide close button if alternate title
  if (alternateTitle) {
    get('.close-button').style['display'] = 'none';
  } else {
    get('.close-button').style['display'] = 'block';
  }
}
