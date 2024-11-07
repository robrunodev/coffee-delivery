/* eslint-disable no-unused-vars */
import { NavigateFunction } from "react-router-dom"
import { Coffee } from "../../interfaces/Coffee"
import { OrderInfo } from "../../pages/Cart"


export enum CartActionsTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',

}

export type Actions =
    | {
        type: CartActionsTypes.ADD_TO_CART
        payload: {
            item: Coffee
        }
    }
    | {
        type:
        | CartActionsTypes.DECREMENT_ITEM_QUANTITY
        | CartActionsTypes.INCREMENT_ITEM_QUANTITY
        | CartActionsTypes.REMOVE_FROM_CART
        payload: {
            itemId: Coffee['id']
        }
    }
    | {
        type: CartActionsTypes.CHECKOUT_CART
        payload: {
            order: OrderInfo
            callback: NavigateFunction
        }
    }

export function addToCartAction(item: Coffee) {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        payload: {
            item
        }
    } satisfies Actions
}


export function removeFromCartAction(itemId: Coffee['id']) {
    return {
        type: CartActionsTypes.REMOVE_FROM_CART,
        payload: {
            itemId,
        }
    } satisfies Actions
}

export function incrementItemQtyAction(itemId: Coffee['id']) {
    return {
        type: CartActionsTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        }
    } satisfies Actions
}

export function decrementItemQtyAction(itemId: Coffee['id']) {
    return {
        type: CartActionsTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        }
    } satisfies Actions
}