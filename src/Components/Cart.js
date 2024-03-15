import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartslice";
//import { useSearchParams } from "react-router-dom";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const handleClearcart=()=>{
            dispatch(clearCart())
    }
return(
    <>
    <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
        <button className="bg-red-500 px-4 text-white rounded-md  hover:bg-indigo-700" onClick={handleClearcart}>Clear Cart</button>
        {cartItems.length===0?<h1 className="text-2xl font-bold mt-8">Cart Is Empty Add Items To The Cart!</h1>:<ItemList items={cartItems}/>}
        </div>
    </div>
    </>
    
)
}
export default Cart;