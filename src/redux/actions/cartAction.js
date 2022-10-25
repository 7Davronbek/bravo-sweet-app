import { ADD_TO_CART, REMOVE_ITEM } from "../types/type"

export const ADD = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}


export const DELETE = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}