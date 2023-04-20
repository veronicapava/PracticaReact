import { useContext, useState } from "react"
import { TodoContext } from "../../TodoContext"
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')

    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Write your new ToDo</label>
            <textarea
                placeholder="Cut onion"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Add</button>
            </div>
        </form>
    )
}

export { TodoForm }