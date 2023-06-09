import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState, useEffect } from "react";

const TodoContext = createContext()

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis

function TodoProvider(props) {
    // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

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
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos)

    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children


    return (
        <TodoContext.Provider value={{ //En value van todas las props que queremos compartir
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider }