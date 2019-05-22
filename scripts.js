let masterTodoList = []

const renderTodoList = () => {
  let html = ''
  masterTodoList.map((todo, idx) => {
    const node = html += `
      <li id="todoItem-${idx}" style="text-decoration: ${todo.isDone ? 'line-through' : 'none'}">
        <a href="#" onclick="toggleTodoListItem(${idx})" style="margin-right: 15px">${todo.isDone ? 'Untoggle' : 'Toggle'}</a> 
        <a href="#" onclick="removeTodoItem(${idx})" style="margin-right: 15px">x</a>
        ${todo.body} 
      </li>
    `
    document.getElementById('todoList').innerHTML = node
  })
}

const addTodo = () => {
  const body = document.getElementById('todoBody').value
  const newTodoItem = {
    body,
    isDone: false,
    createdAt: new Date(),
  }

  masterTodoList.push(newTodoItem)
  document.getElementById('todoBody').value =''
  renderTodoList()
}

const removeTodoItem = selectedTodoIdx => {
  masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx)
  if (masterTodoList.length === 0) document.getElementById('todoList').innerHTML = ''
  renderTodoList()
}

const toggleTodoListItem = selectedTodoIdx => {
  const oldTodoItem = masterTodoList[selectedTodoIdx]
  const newTodoItem = {
    ...oldTodoItem,
    isDone: !oldTodoItem.isDone,
  }

  masterTodoList[selectedTodoIdx] = newTodoItem
  renderTodoList()
}
