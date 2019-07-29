/*----- constants -----*/ 
const SYMBOL = {
  '0': '',
  '1': '&#120299;',
  '-1': '&#120290;'
}

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
  //stores location of msg tag  
  let msg = document.getElementById('msg');
  //Changes message based on whose turn it is
  msg.textContent = (player === 1) ? "X's Turn" : "O's Turn";
  //Update div content to reflect info inside board object.
  //Loop through each row in the board and do function
  board.forEach(function(rowArray, rowIdx) {
    //Loop through each column in that row
    rowArray.forEach(function (colVal, colIdx) {
      //Looping through board and selecting each corresponding html div with given data values
      //Uses an attribute selector to use the div with the given attribute
      let div = document.querySelector(`[data-col='${colIdx + 1}'][data-row='${rowIdx + 1}']`);
      //set text content of div to match player turn (X or O)
      div.innerHTML = SYMBOL[colVal];
    });
  });
}


function handleClick (evt) {
  //sets div to the div that tirggered the handleClick event
  let div = evt.target;
  //sets column num and row num to dataset of clicked div
  //parses returned string into an Int
  let columnIdx = parseInt(div.dataset.col) -1;
  let rowIdx = parseInt(div.dataset.row) - 1;
  // returns out of event if a div isn't clicked or there
  //is alreaey a winner or tie
  if (isNaN(columnIdx) || isNaN(rowIdx) || winner) return;
  //set board array index to player number
  board[rowIdx][columnIdx] = player;
  //change player
  player *= -1;
  //check for winner and render
  winner = getWinner();
  render();
}

function getWinner() {
    return null;
}