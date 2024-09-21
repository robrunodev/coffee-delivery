/* eslint-disable no-unused-vars */
import { Coffee } from "../../interfaces/Coffee"


export enum CartActionsTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export function addToCartAction(item: Coffee) {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        payload: {
            item
        }
    }
}


export function removeFromCartAction(id: string) {
    return {
        type: CartActionsTypes.REMOVE_FROM_CART,
        payload: {
            id,
        }
    }
}