const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "@/store/slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;