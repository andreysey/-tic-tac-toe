// Import stylesheets
import "./style.css";

// Write Javascript code!

// 1
const elements = document.getElementsByClassName("cell"); // можно использовать селекторы Document.querySelectorAll('button.cell')
// 2
const resultArray = Array.from(elements);
// 3
const visitorFn = v => {
  // v - это элемент массива, по которому мы итерируем (идет по элементам)
  // тут мы предполагаем, что каждый элемент массива - кнопка.
  v.addEventListener("click", turn);
};
// 4
resultArray.forEach(visitorFn);

/*
Array.from(document.getElementsByClassName('cell'))
    .forEach(cell => cell.addEventListener('click', turn));
*/
// (1)(5(2)(4(3)))(6)

const field = [
  //     0  1  2
  /*0*/ [1, 2, 3],
  /*1*/ [4, 5, 6],
  /*2*/ [7, 8, 9]
];

let currentPlayer = false;

let stepCount = 0;

function turn() {
  // this - execution context
  // так как обработчик события присоединен к кнопке, то в this будет находится ссылка на обьект кнопки
  // Game LOGIC
  let row = this.dataset.row;
  let col = this.dataset.col;
  setCellValue(row, col);
  checkWin();
  nextTurn();
  // Sync UI
  // Disable button
  this.disabled = true;
  // Render symbol
  this.innerHTML = field[row][col] ? "0" : "x";
  stepCount++ ;
}

function checkWin() {
  if (field[0][0] === field[0][1] && field[0][1] === field[0][2]) {
    alert("You Win!");
  } else if (field[1][0] === field[1][1] && field[1][1] === field[1][2]) {
      alert("You Win!");
  } else if (field[2][0] === field[2][1] && field[2][1] === field[2][2]) {
      alert("You Win!");
  } else if (field[0][0] === field[1][0] && field[1][0] === field[2][0]) {
      alert("You Win!");
  } else if (field[0][1] === field[1][1] && field[1][1] === field[2][1]) {
      alert("You Win!");
  } else if (field[0][2] === field[1][2] && field[1][2] === field[2][2]) {
      alert("You Win!");
  } else if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
      alert("You Win!");
  } else if (field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
      alert("You Win!");
  } else if (stepCount === 8) {
    alert("Non Win=(");
  }
  
}

function setCellValue(row, col) {
  field[row][col] = currentPlayer;
}

function nextTurn() {
  currentPlayer = !currentPlayer;
}
