'use strict'

const gameBody = document.querySelector('body')

// Create selector for number of drawing cells
const form = document.createElement('form')
const selector = document.createElement('div')
form.appendChild(selector)
gameBody.appendChild(form)

const textLabel = document.createElement('label')
textLabel.textContent = "Number of squares per side(10-100): "
selector.appendChild(textLabel)

const inputField = document.createElement('input')
inputField.type = "number"
inputField.min = 10
inputField.max = 100
inputField.step = 2
selector.appendChild(inputField)

const contSubmit = document.createElement('div')
const btnSubmit = document.createElement('input')
btnSubmit.type = "submit"
contSubmit.appendChild(btnSubmit)
form.appendChild(contSubmit)

const container = document.createElement('div')
gameBody.appendChild(container)
