"use strict";

const gameBody = document.querySelector("body");

// Create selector for number of drawing cells
const form = document.createElement("div");
form.classList.add("form");
const selector = document.createElement("div");
selector.classList.add("submit");
form.appendChild(selector);
gameBody.appendChild(form);

const textLabel = document.createElement("label");
textLabel.classList.add("textLabel");
textLabel.textContent = "Number of squares per side(10-100): ";
selector.appendChild(textLabel);

const inputField = document.createElement("input");
inputField.type = "number";
inputField.min = 10;
inputField.max = 100;
inputField.step = 2;
inputField.value = 20;
selector.appendChild(inputField);

const contSubmit = document.createElement("div");
contSubmit.classList.add("submit");
const btnSubmit = document.createElement("button");
btnSubmit.classList.add("submit");
btnSubmit.textContent = "Set grid";
contSubmit.appendChild(btnSubmit);
form.appendChild(contSubmit);

const container = document.createElement("div");
gameBody.appendChild(container);

btnSubmit.addEventListener("click", createGrid);

function createGrid() {
  console.log(inputField.value);
  container.replaceChildren();
    for (let index = 0; index < inputField.value; index++) {
        createRow(inputField.value);
    }
  
  inputField.value = 20;
}

function createRow(value) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let index = 0; index < value; index++) {
    const element = document.createElement("div");
    element.classList.add("element");
    element.classList.add("col-xs");
    row.appendChild(element);
  }
}
