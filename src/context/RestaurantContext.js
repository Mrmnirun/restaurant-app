import React, {useState, useEffecxt, useContext, createContext} from 'react'

const RestaurantContext = createContext()

export function useRestaurant() {
    return useContext(RestaurantContext)
}

export function RestaurantProvider ({children}) {
    const [restaurant, setRestaurant] = useState({restaurant: '', table: ''})

    function addItem(order) {
        console.log({orderInCOntext: order})
        if(!order) return
        setRestaurant(restaurant=>([...restaurant, order]))
    }

    function selectTable (table) {
        setRestaurant({...restaurant, table})
    }


    const values = {
        restaurant,
        selectTable
    }

    return (
        <RestaurantContext.Provider value={values}>
            {children}
        </RestaurantContext.Provider>
    )
}