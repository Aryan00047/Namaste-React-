import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../slices/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center p-4 m-4">
      <div>
        <button className="rounded-lg bg-green-500 m-4 text-white p-2 shadow-lg" onClick={handleClearCart}>Clear Cart</button>
      </div>
      {cartItems.length === 0 && <h1 className="font-bold m-2">Cart is empty. Add Items to the cart</h1>}
      <div className="w-6/12 m-auto my-4 border rounded-lg shadow-md ">
        <ItemCards info={cartItems} isCart={true}/>
      </div>
    </div>
  )
}

export default Cart;