const inputEl = document.querySelector('#goal')
const buttonEl = document.querySelector('button')
const listEl = document.querySelector('ul')

function addGoal() {
    listEl.insertAdjacentHTML('afterbegin', `<li>${inputEl.value}</li>`)
    inputEl.value = ""
}

buttonEl.addEventListener('click', addGoal)
