import { useEffect, useState } from 'react';
import { AppUi } from './AppUi';


// const defaultToDos = [
//   { text: 'Cut onion', completed: true, id: 1 },
//   { text: 'Study English', completed: false, id: 2 },
//   { text: 'Make breakfast', completed: true, id: 3 }
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageTodos)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(error)
      }

    }, 1000)
  })



  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)

    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  return {
    item, saveItem, loading
  }

}


function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text) //Buscando el index del todo ingresado
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)

    // todos[todoIndex] = { una forma
    //   text: todos[todoIndex].text,
    //   complete: true
    // }

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }


  useEffect(() => {
    console.log('use effect')
  }, [totalTodos])


  return (
    <AppUi
      loading={loading}
      error={error}
      total={totalTodos} completed={completedTodos}
      searchValue={searchValue} setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
