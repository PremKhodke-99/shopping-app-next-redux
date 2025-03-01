const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        },
        removeFromCart(state, action) {
            let cpyCartItem = [...state.cartItems];
            cpyCartItem = cpyCartItem.filter(item => item.id !== action.payload);
            state.cartItems = cpyCartItem;

            return state
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;