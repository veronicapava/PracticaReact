import { useState, useEffect } from "react"

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

export { useLocalStorage }