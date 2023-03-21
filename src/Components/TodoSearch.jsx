import { useState } from "react"
import "../style/todoSearch.css"

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return [
    <input className="TodoSearch" placeholder="Search a ToDo" onChange={onSearchValueChange} value={searchValue} />,
  ]
}

export default TodoSearch
