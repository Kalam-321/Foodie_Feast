import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className=" text-2xl font-bold">Cart</h1>
            <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
                Clear Cart
            </button>
            <div className="w-6/12 mx-auto my-4 py-4 bg-gray-50 shadow-lg">
                {cartItems.length===0 ? <h1 className="font-bold">Cart is Empty.. Add items to the cart</h1> : <ItemList items={cartItems}/>}
            </div>
        </div>
    )
}

export default Cart;