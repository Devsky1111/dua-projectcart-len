import { combineReducers } from "redux";
import product_reducer from "./product-reducer";
import cart_reducer from "./Cart-reducer";
import message_reducer from './message-reducer'
const root_reducer = combineReducers({
    product: product_reducer,
    addToCart: cart_reducer,
    changemessage: message_reducer





    
})
export default root_reducer