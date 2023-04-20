import "../TodoCounter/TodoCounter.css"

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h3 className="TodoCounter">
        You have been completed {completed} of {total} ToDos
      </h3>
    </div>
  )
}

export { TodoCounter }
