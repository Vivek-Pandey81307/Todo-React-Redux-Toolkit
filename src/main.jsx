import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider } from 'react-redux'
import {store} from './app/store'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import Todo from './components/Todo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} >
    <App />
    <AddTodo />
    <Todos>
      <Todo/>
    </Todos>
  </Provider> 
)
