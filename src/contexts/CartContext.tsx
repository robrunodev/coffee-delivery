/* eslint-disable no-unused-vars */

import { createContext, useReducer } from "react"
import { Coffee } from "../interfaces/Coffee"
import { addToCartAction } from "../reducers/cart/actions"
import { cartReducer } from "../reducers/cart/reducer"

interface CartContextType {
    cartItems: Coffee[]
    totalCartQty: number
    totalCartValue: number
    addToCart: (item: Coffee, qty: number) => void
    removeFromCart: () => void
}

interface cartContextProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: cartContextProviderProps) => {

    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            items: [],
            totalCartQty: 0,
            totalCartValue: 0
        },
    )

    const { items: cartItems, totalCartQty, totalCartValue } = cartState

    function addToCart(item: Coffee, qty: number) {

        const newItem: Coffee = {
            ...item,
            quantity: qty,
        }

        dispatch(addToCartAction(newItem))
    }

    function removeFromCart() { }


    return (
        <CartContext.Provider value={{
            cartItems,
            totalCartQty,
            totalCartValue,
            addToCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>)
}