import { CreateTodoButtom } from "../Components/CreateTodoButtom/CreateTodoButtom"
import { TodoCounter } from "../Components/TodoCounter/TodoCounter"
import TodoItem from "../Components/TodoItem/TodoItem"
import TodoList from "../Components/TodoList/TodoList"
import TodoSearch from "../Components/TodoSearch/TodoSearch"

function AppUi({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <div>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Esta cargando la app :D </p>}
        {!loading && !searchedTodos.length && <p>Crea un nuevo todo :D</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </div>
  )
}

export { AppUi }
