
import { CartState } from "../../interfaces/Cart";
import { Coffee } from "../../interfaces/Coffee";
import { CartActionsTypes } from "./actions";

interface ActionProps {
    payload: {
        item: Coffee
    },
    type: CartActionsTypes
}

export function cartReducer(state: CartState, action: ActionProps) {
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
            const item = newState.items.find(item => item.id === action.payload.item.id)

            if (item) {
                item.quantity = (item.quantity ?? 0) + 1
            }

            return { ...state }
        }

        default:
            return state
    }
}
