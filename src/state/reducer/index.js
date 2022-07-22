import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import CartReducer from "./cartReducer";
import GetNewsReducer from "./getNewsReducer"

const reducer = combineReducers({
    amount: amountReducer,
    cart: CartReducer,
    news: GetNewsReducer
})

export default reducer;
