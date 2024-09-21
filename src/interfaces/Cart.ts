import { Coffee } from "./Coffee"

export interface CartState {
    items: Coffee[]
    totalCartQty: number
    totalCartValue: number
}