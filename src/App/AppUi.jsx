import { useContext } from "react"
import { CreateTodoButtom } from "../Components/CreateTodoButtom/CreateTodoButtom"
import { TodoCounter } from "../Components/TodoCounter/TodoCounter"
import TodoItem from "../Components/TodoItem/TodoItem"
import TodoList from "../Components/TodoList/TodoList"
import TodoSearch from "../Components/TodoSearch/TodoSearch"
import { TodoContext } from "../TodoContext"
import { Modal } from "../Components/Modal/index"
import { TodoForm } from "../Components/TodoForm"

function AppUi() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)
  return (
    <div>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Something went wrong</p>}
        {loading && <p>Loading page</p>}
        {!loading && !searchedTodos.length && <p>Create a new ToDo</p>}
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButtom setOpenModal={setOpenModal} />
    </div>
  )
}

export { AppUi }
