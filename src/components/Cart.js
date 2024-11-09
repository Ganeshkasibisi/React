import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
         dispatch(clearCart());
    }
return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium" 
            onClick={handleClearCart}
            >Clear Cart
            </button>
            {cartItems.length===0 && (
                <h1>Cart is empty Add items to your cart</h1>
                )}
              <ItemList items={cartItems} />
        </div>
    </div>
)
}
export default Cart;