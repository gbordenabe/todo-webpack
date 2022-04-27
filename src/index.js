import './styles.css'
import {TodoList} from './classes/todo-list.class'
import {crearTodoHtml} from './js/componentes'

export const todoList = new TodoList()

console.log(todoList)

todoList.todos.forEach(crearTodoHtml)
