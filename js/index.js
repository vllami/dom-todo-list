let title = document.createElement('p')
title.appendChild(document.createTextNode('New To-Do:'))
title.setAttribute('class', 'title')

let inputField = document.createElement('input')
inputField.setAttribute('class', 'input-field')
inputField.setAttribute('placeholder', 'What will you do today?')

let addButton = document.createElement('button')
addButton.appendChild(document.createTextNode('Add'))
addButton.setAttribute('class', 'add-button')

let outputListNew = document.createElement('div')
outputListNew.setAttribute('class', 'output-list-new')

let card = document.createElement('div')
card.setAttribute('class', 'card')

let wrapper = document.createElement('div')
wrapper.setAttribute('class', 'wrapper')

let editOutput = '';

addButton.addEventListener('click', () => {
    if (inputField.classList.contains('edit-to-do')) {
        if (inputField.value === '') {
            outputListNew.querySelector('#' + editOutput).remove()
        } else {
            let output = outputListNew.querySelector('#' + editOutput).children
            output[0].textContent = inputField.value
        }
        inputField.value = ''
        inputField.classList.remove('edit-to-do')
        title.textContent = 'New To-Do:'
        addButton.textContent = 'Add'
    } else {
        if (inputField.value !== '') {
            let outputListCount = outputListNew.childNodes.length

            let toDoName = document.createElement('p')
            toDoName.className = 'to-do-name'
            toDoName.textContent = inputField.value

            let outputList = document.createElement('div')
            outputList.className = 'output-list'
            outputList.id = 'output' + (outputListCount + 1)

            let editButton = document.createElement('button')
            editButton.className = 'edit-button'
            editButton.setAttribute('alt', 'Edit')

            editButton.addEventListener('click', () => {
                inputField.value = toDoName.textContent
                inputField.classList.add('edit-to-do')
                title.textContent = 'Edit To-Do:'
                addButton.textContent = 'Edit'
                editOutput = outputList.id
            })

            let deleteButton = document.createElement('button')
            deleteButton.className = 'delete-button'

            deleteButton.addEventListener('click', () => {
                deleteButton.parentNode.remove()
            })

            outputList.append(toDoName, editButton, deleteButton)
            outputListNew.append(outputList)
            inputField.value = ''
        }
    }
})

wrapper.append(card)
wrapper.append(outputListNew)
card.append(title, inputField, addButton)
document.body.append(wrapper)