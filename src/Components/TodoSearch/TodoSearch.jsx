import { useContext } from "react"
import "../TodoSearch/todoSearch.css"
import { TodoContext } from "../../TodoContext"

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return [
    <input className="TodoSearch" placeholder="Search a ToDo" onChange={onSearchValueChange} value={searchValue} />,
  ]
}

export default TodoSearch
