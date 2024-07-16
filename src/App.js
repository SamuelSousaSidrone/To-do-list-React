
import { useState } from 'react';
import './App.css';
import Todo from './componentes/todo'
import Todoform from './componentes/todoform'

/* import App.css*/
export default function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    }
  ])

  return (
    /*Code JSX*/
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='tido-list'>
        {todos.map((todo) => (
         <Todo todo={todo} />
        ))}
      </div>
        <Todoform />

    </div>
  );
}


