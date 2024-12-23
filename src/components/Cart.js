import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart=()=>{
    //subscribing  to store
    const cartItems=useSelector((store)=>{
        return store.cart.items;
    });
    const dispatch=useDispatch();
    const handleClear=()=>{
         dispatch(clearCart());
    }
    return(
    <div className="min-h-svh w-1/2 m-auto p-2 shadow-xl  relative ">
        
        <h1 className="font-bold text-3xl text-center m-4 p-2">Cart</h1>
        <button onClick={handleClear} className="m-4 p-2 text-2xl rounded-md bg-[#f05a35] absolute top-3 right-6">Clear Cart </button>
        {cartItems.length!=0 ?<ItemList data={cartItems}></ItemList>:
        <div className="  flex flex-col h-[300px] items-center justify-center">
        <h2 className="text-2xl font-semibold">ADD some dishes to Cart</h2>
        <h1 className="text-2xl font-semibold">HAPPY SHOPPING!!!!</h1>
        </div>}
        
    </div>)
}
export default Cart;