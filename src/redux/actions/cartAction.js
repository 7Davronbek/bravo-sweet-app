import { ADD_TO_CART } from "../types/type"

export const ADD = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}