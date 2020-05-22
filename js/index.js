function getDivElement() {
  let createEl = document.createElement("div");   /// створення блоку дів
  createEl.classList.add("block");                /// створення класу
  createEl.style.backgroundColor = randomColor();  /// задання кольору через функцію
  createEl.addEventListener('click', deleteEl)     /// добавляння події для видалення
  main.appendChild(createEl);                      /// добавляння елемента на сторінку 
}

function randomColor() {                           /// рандомний колір
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function deleteEl(event) {                         /// видалення елементу
  event.path[0].remove()
}

window.addEventListener('keydown', (event) => {if (event.keyCode === 13) {getDivElement()}}) /// створення нового елементу при натисканны на ентер



