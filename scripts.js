const todoBody = () => document.getElementById('todoBody')
const todoListUI = () => document.getElementById('todoList')
const masterTodoList = () => JSON.parse(localStorage.getItem('todoList'))
const saveTodoList = todoList => localStorage.setItem('todoList', JSON.stringify(todoList))

const renderTodoList = () => {
  const todoList = masterTodoList()
  let html = ''
  todoList.map(({ body, isDone }, idx) => {
    const node = html += `
      <li style="text-decoration: ${isDone ? 'line-through' : 'none'}">
        <a href="#" onclick="toggleTodoListItem(${idx})" style="margin-right: 15px">${isDone ? 'Untoggle' : 'Toggle'}</a> 
        <a href="#" onclick="removeTodoItem(${idx})" style="margin-right: 15px">x</a>
        ${body} 
      </li>
    `
    todoListUI().innerHTML = node
  })
}

const addTodo = () => {
  const body = todoBody().value
  const todoItem = {
    body,
    isDone: false,
    createdAt: new Date(),
  }

  const todoList = masterTodoList() || []
  todoList.push(todoItem)

  saveTodoList(todoList)
  todoBody().value = ''
  renderTodoList()
}

const removeTodoItem = selectedTodoIdx => {
  let todoList = masterTodoList()
  todoList = todoList.filter((_, idx) => idx !== selectedTodoIdx)
  if (todoList.length === 0) todoListUI().innerHTML = ''
  saveTodoList(todoList)
  renderTodoList()
}

const toggleTodoListItem = selectedTodoIdx => {
  const todoList = masterTodoList()
  const toggledTodoItem = todoList[selectedTodoIdx]
  const newTodoItem = {
    ...toggledTodoItem,
    isDone: !toggledTodoItem.isDone,
  }

  todoList[selectedTodoIdx] = newTodoItem
  saveTodoList(todoList)
  renderTodoList()
}

renderTodoList()