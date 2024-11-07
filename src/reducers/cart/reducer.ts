
import { CartState } from "../../interfaces/Cart";
import { Actions, CartActionsTypes } from "./actions";


export function cartReducer(state: CartState, action: Actions) {
    switch (action.type) {
        case CartActionsTypes.ADD_TO_CART: {
            const newState = { ...state }
            const itemAlreadyAdded = newState.items.find((item) => item.id === action.payload.item.id)

            if (itemAlreadyAdded) {
                newState.items = newState.items.map((item) => {
                    if (item.id === action.payload.item.id) {
                        return { ...item, quantity: (item.quantity ?? 0) + (action.payload.item.quantity ?? 0) }
                    }
                    return item
                })
            } else {
                newState.items = [...state.items, action.payload.item]
            }

            const totalCartQty = newState.items.reduce((acc, item) => {
                return acc + (item.quantity ?? 0)
            }, 0)

            const totalCartValue = newState.items.reduce((acc, item) => {
                const itemValue = item.price * (item.quantity ?? 0);
                return acc + itemValue;
            }, 0);


            return {
                ...newState,
                totalCartQty,
                totalCartValue
            }
        }
        case CartActionsTypes.REMOVE_FROM_CART: {
            return {
                ...state
            }
        }
        case CartActionsTypes.INCREMENT_ITEM_QUANTITY: {

            const newState = { ...state }
            const item = newState.items.find(item => item.id === action.payload.itemId)
            const itemQuantity = item?.quantity ?? 0

            if (item) {
                item.quantity = itemQuantity + 1
            }

            return { ...newState }
        }
        case CartActionsTypes.DECREMENT_ITEM_QUANTITY: {

            const newState = { ...state }
            const item = newState.items.find(item => item.id === action.payload.itemId)
            const itemQuantity = item?.quantity ?? 0

            if (item?.id && itemQuantity > 1) {
                item.quantity = itemQuantity - 1
            }

            return { ...newState }
        }

        default:
            return state
    }
}
