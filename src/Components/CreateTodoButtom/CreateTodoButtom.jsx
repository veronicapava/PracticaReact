import "../CreateTodoButtom/CreateTodoButtom.css"

function CreateTodoButtom() {
  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <button className="CreateTodoButton" onClick={() => onClickButton("Modal to create a new ToDo")}>
      +
    </button>
  )
}

export { CreateTodoButtom }
