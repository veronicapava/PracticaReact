function TodoItem(props) {
  return (
    <div>
      <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </div>
  )
}

export default TodoItem
