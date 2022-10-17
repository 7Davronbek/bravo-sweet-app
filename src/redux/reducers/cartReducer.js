import { ADD_TO_CART } from "../types/type"

const initialState = {
    carts: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp],
                };
            } break;

        default:
            return state
    }
}