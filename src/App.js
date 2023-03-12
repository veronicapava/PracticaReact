import { Fragment } from 'react';
import { CreateTodoButtom } from './CreateTodoButtom';
import { TodoCounter } from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

const todos = [
  { text: 'Cut onion', completed: false, id: 1 },
  { text: 'Study English', completed: false, id: 2 },
  { text: 'Make breakfast', completed: false, id: 3 }
];

function App() {
  return (
    <Fragment>
      <CreateTodoButtom />
      <TodoCounter />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} text={todo.text} />
          ))
        }
      </TodoList>
      <TodoSearch />
    </Fragment>
  );
}

export default App;
