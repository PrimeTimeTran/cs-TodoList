const docTodoBody = () => document.getElementById('todoBody')
const docTodoList = () => document.getElementById('todoList')
const masterTodoList = () => JSON.parse(localStorage.getItem('todoList')) || []

const saveToLocalStorage = todoList => localStorage.setItem('todoList', JSON.stringify(todoList))

const renderTodoItem = ({ isDone, body }, idx) => {
	return `
		<li style="text-decoration: ${isDone ? 'line-through' : 'none'}">
			<a href="#" onclick="toggleTodoItem(${idx})" style="margin-right: 15px">${isDone ? 'Untoggle' : 'Toggle'}</a> 
			<a href="#" onclick="removeTodoItem(${idx})" style="margin-right: 15px">x</a>
			${body} 
		</li>
	`
}

const renderTodoList = () => {
	const todoList = masterTodoList()
	const todoHTML = todoList.map(renderTodoItem)
	document.getElementById('todoList').innerHTML = todoHTML.join('\n')
}

const saveTodoList = todoList => {
	saveToLocalStorage(todoList)
	renderTodoList()
}

const addTodo = () => {
	const todoItem = {
		isDone: false,
		createdAt: new Date(),
		body: docTodoBody().value,
	}

	const todoList = masterTodoList()
	todoList.push(todoItem)
	saveTodoList(todoList)
	docTodoBody().value = ''
}

const removeTodoItem = selectedTodoIdx => {
	let todoList = masterTodoList()

	todoList = todoList.filter((_, idx) => idx !== selectedTodoIdx)

	if (todoList.length === 0) docTodoList().innerHTML = ''
	saveTodoList(todoList)
}

const toggleTodoItem = selectedTodoIdx => {
	const todoList = masterTodoList()
	todoList[selectedTodoIdx].isDone = !todoList[selectedTodoIdx].isDone
	saveTodoList(todoList)
}

renderTodoList()
