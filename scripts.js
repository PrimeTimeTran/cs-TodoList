let masterTodoList = []

const renderTodoList = () => {
  let html = ''
  masterTodoList.map((todo, idx) => {
    const node = html += `<li id="todoItem-${idx}" style="text-decoration: ${todo.isDone ? 'line-through' : 'none'}">
      <a href="#" onclick="toggleTodoListItem(${idx})">${todo.isDone ? 'Untoggle' : 'Toggle'}</a> ${todo.body} 
      <a href="#" onclick="removeTodoItem(${idx})">x</a></li>
    `
    document.getElementById('todoList').innerHTML = node
  })
}

const addTodo = () => {
  const todoItem = document.getElementById('todoItem').value
  const newTodoItem = {
    createdAt: new Date(),
    body: todoItem,
    isDone: false
  }
  masterTodoList.push(newTodoItem)
  renderTodoList()
  document.getElementById('todoItem').value =''
}

const removeTodoItem = selectedTodoIdx => {
  // const oldTodoItem = masterTodoList[selectedTodoIdx]
  masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx)
  
  if (masterTodoList.length === 0) document.getElementById('todoList').innerHTML = ''
  renderTodoList()
}

const toggleTodoListItem = selectedTodoIdx => {
  const oldTodoItem = masterTodoList[selectedTodoIdx]
  const newTodoItem = {
    createdAt: oldTodoItem.createdAt,
    isDone: !oldTodoItem.isDone,
    body: oldTodoItem.body,
  }

  masterTodoList[selectedTodoIdx] = newTodoItem
  renderTodoList()
  console.log('oldTodoItemoldTodoItemoldTodoItem', oldTodoItem)
}
