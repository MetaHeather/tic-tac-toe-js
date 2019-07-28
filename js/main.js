/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 

let board, player, winner;


/*----- cached element references -----*/ 


/*----- event listeners -----*/ 

document.querySelector('section.board').addEventListener('click', handleClick);

/*----- functions -----*/
init(); 

function init () {
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    player = 1;
    winner = null;
    render();
  }
  
function render () {
  
}

function handleClick (evt) {
  //sets div to the div that tirggered the handleClick event
  let div = evt.target;
  //sets column num and row num to dataset of clicked div
  //parses returned string into an Int
  let columnNum = parseInt(div.dataset.col) -1;
  let rowNum = parseInt(div.dataset.row) - 1;
  // returns out of event if a div isn't clicked or there
  //is alreaey a winner or tie
  if (isNaN(columnNum) || isNaN(rowNum) || winner) return;
  //set board array index to player number
  board[rowNum][columnNum] = player;
  //change player
  player *= -1;
  //check for winner and render
  winner = getWinner();
  render();
}

function getWinner() {
    return null;
}