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
  const [searchValue, setSearchValue] = useState('')
  return (
    < div>

      <TodoCounter />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} text={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButtom />

    </div>
  );
}

export default App;
