const container = document.querySelector("#container");

const btn = document.querySelector("#btn");

const comment = document.querySelector("#comment");

let row;
let col;
let classadded;

let flag = true;

function getRowAndCol() {
  row = prompt("Rows");
  col = prompt("Cols");

  if (row <= 1 || col <= 1) {
    comment.innerHTML = "";
    const pelement = document.createElement("p");
    pelement.innerText = "Row or Column cannot be less than 1, Try Again";
    comment.appendChild(pelement);
    flag = false;
  } else if (row > 100 || col > 100) {
    comment.innerHTML = "";
    const pelement = document.createElement("p");
    pelement.innerText = "Row or Column cannot be greater than 100, Try Again";
    comment.appendChild(pelement);
    flag = false;
  }
}

btn.addEventListener("click", updateGrid);

function generateGrid() {
  for (let i = 0; i < row; i++) {
    const rowItem = document.createElement("div");
    const row = container.appendChild(rowItem);
    row.classList.add("rowclass");

    for (let j = 0; j < col; j++) {
      const columnItem = document.createElement("div");
      columnItem.className = "box";
      columnItem.addEventListener("mouseenter", () => {
        columnItem.style.backgroundColor = getRGB();
      });
      row.appendChild(columnItem);
    }
  }

  btn.removeEventListener("click", generateGrid);
}

function updateGrid() {
  if (flag == true) {
    container.innerHTML = "";
    generateGrid();
  }
}

function clearGrid() {
  if (flag == true) {
    container.innerHTML = "";
    generateGrid();
  }
}

function random(max, min) {
  return Math.random() * (max - min + 1) + min;
}

function getRGB() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  return `rgb(${r},${g},${b})`;
}
