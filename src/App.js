import { useState } from 'react';
import { CreateTodoButtom } from './Components/CreateTodoButtom';
import { TodoCounter } from './Components/TodoCounter';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';

const defaultToDos = [
  { text: 'Cut onion', completed: true, id: 1 },
  { text: 'Study English', completed: false, id: 2 },
  { text: 'Make breakfast', completed: true, id: 3 }
];

function App() {
  const [todos, setTodos] = useState(defaultToDos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text) //Buscando el index del todo ingresado
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)

    // todos[todoIndex] = { una forma
    //   text: todos[todoIndex].text,
    //   complete: true
    // }

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    < div>

      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)} />
          ))
        }
      </TodoList>
      <CreateTodoButtom />

    </div>
  );
}

export default App;
