import { useContext } from "react"
import "../TodoCounter/TodoCounter.css"
import { TodoContext } from "../../TodoContext"

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <div>
      <h3 className="TodoCounter">
        You have been completed {completedTodos} of {totalTodos} ToDos
      </h3>
    </div>
  )
}

export { TodoCounter }
