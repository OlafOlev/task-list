onst form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')
const deletealltask = document.querySelector('#del-tasks')

// const myTask = document.querySelector('#task-title ul li')
taskList.addEventListener('click', deleteTask)
form.addEventListener('submit', addTask)
deletealltask.addEventListener('click', deleteAllTask)



function addTask(e){
    //create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('x'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    //add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskInput.value = ''
    e.preventDefault()
}
function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Aru you sure to delete this task')){
            e.target.parentElement.remove()
        }
    }
}
function deleteAllTask(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}