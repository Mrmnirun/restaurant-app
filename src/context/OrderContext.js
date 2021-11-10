import React, {useState, useEffecxt, useContext, createContext} from 'react'

const OrderContext = createContext()

export function useOrder() {
    return useContext(OrderContext)
}

export function OrderProvider ({children}) {
    const [orders, setOrders] = useState([])

    function addItem(order) {
        console.log({orderInCOntext: order})
        if(!order) return
        setOrders(orders=>([...orders, order]))
    }

    // function removeItem(order) {
    //     setOrders(orders=>orders.filter(cartItem=>cartItem.id!==itemId))
    // }

    // function changeSelection(itemId, selected=false) {
    //     setOrders(orders=>orders.map(cartItem=>{
    //         if(cartItem.id===itemId){
    //             cartItem.selected = selected
    //         }
    //         return cartItem
    //     }))
    // }

    function clearOrders() {
        setOrders([])
    }

    const values = {
        orders,
        addItem,
        // removeItem,
        // changeSelection,
        clearOrders
    }

    return (
        <OrderContext.Provider value={values}>
            {children}
        </OrderContext.Provider>
    )
}