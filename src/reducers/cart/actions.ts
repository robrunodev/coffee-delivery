/* eslint-disable no-unused-vars */
import { Coffee } from "../../interfaces/Coffee"


export enum CartActionsTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
}

export function addToCartAction(item: Coffee) {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        payload: {
            item
        }
    }
}


export function removeFromCartAction(id: Coffee['id']) {
    return {
        type: CartActionsTypes.REMOVE_FROM_CART,
        payload: {
            id,
        }
    }
}

export function incrementItemQtyAction(id: Coffee['id']) {
    return {
        type: CartActionsTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            id,
        }
    }
}