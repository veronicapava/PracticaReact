import "../style/TodoItem.css"

function TodoItem(props) {
  const onComplete = () => {
    alert("ToDo completed: " + props.text)
  }
  const onDelete = () => {
    alert("ToDo deleted: " + props.text)
  }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  )
}

export default TodoItem
