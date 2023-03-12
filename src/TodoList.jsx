function TodoList(props) {
  return (
    <div>
      <section>
        <ul>{props.children}</ul>
      </section>
    </div>
  )
}

export default TodoList
