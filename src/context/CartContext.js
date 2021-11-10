import React, {useState, useEffecxt, useContext, createContext} from 'react'

const AuthContext = createContext()

export function useCart() {
    return useContext(AuthContext)
}

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    function addItem(item, quantity=1, selected=true) {
        if(!item) return
        setCart(cart=>{
            if (cart.find(cartItem=>cartItem.id===item.id)) {
                return cart.map(cartItem=>{
                    if (cartItem.id === item.id) {
                        cartItem.quantity += quantity
                    }
                    return cartItem
                })
            }
            return [...cart, {...item, quantity, selected}]
        })
    }

    function removeItem(itemId) {
        setCart(cart=>cart.filter(cartItem=>cartItem.id!==itemId))
    }

    function changeSelection(itemId, selected=false) {
        setCart(cart=>cart.map(cartItem=>{
            if(cartItem.id===itemId){
                cartItem.selected = selected
            }
            return cartItem
        }))
    }

    function clearCart() {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        changeSelection,
        clearCart
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}