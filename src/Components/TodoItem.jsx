import "../style/TodoItem.css"

function TodoItem({ text, completed }) {
  const onComplete = () => {
    alert("ToDo completed: " + text)
  }
  const onDelete = () => {
    alert("ToDo deleted: " + text)
  }
  return (
    <li className="TodoItem">
      <span className={`${completed ? "Icon-check--active" : "Icon Icon-check"}`} onClick={onComplete}>
        √
      </span>
      <p className={`${completed ? "TodoItem-p--completed" : "TodoItem-p"}`}>{text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  )
}

export default TodoItem
