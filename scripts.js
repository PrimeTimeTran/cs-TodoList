let masterTodoList = []

const todoList = () => document.getElementById('todoList')
const todoBody = () => document.getElementById('todoBody')

const renderTodoList = () => {
  let html = ''
  masterTodoList.map(({ body, isDone }, idx) => {
    const node = html += `
      <li style="text-decoration: ${isDone ? 'line-through' : 'none'}">
        <a href="#" onclick="toggleTodoListItem(${idx})" style="margin-right: 15px">${isDone ? 'Untoggle' : 'Toggle'}</a> 
        <a href="#" onclick="removeTodoItem(${idx})" style="margin-right: 15px">x</a>
        ${body} 
      </li>
    `
    todoList().innerHTML = node
  })
}

const addTodo = () => {
  const body = todoBody().value
  const newTodoItem = {
    body,
    isDone: false,
    createdAt: new Date(),
  }

  masterTodoList.push(newTodoItem)
  todoBody().value = ''
  renderTodoList()
}

const removeTodoItem = selectedTodoIdx => {
  masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx)
  if (masterTodoList.length === 0) todoList().innerHTML = ''
  renderTodoList()
}

const toggleTodoListItem = selectedTodoIdx => {
  const toggledTodoItem = masterTodoList[selectedTodoIdx]
  const newTodoItem = {
    ...toggledTodoItem,
    isDone: !toggledTodoItem.isDone,
  }

  masterTodoList[selectedTodoIdx] = newTodoItem
  renderTodoList()
}
