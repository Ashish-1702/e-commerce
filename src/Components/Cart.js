import ItemList from "./ItemList";
import {useSelector} from "react-redux";
import "./Cart.css";

const Cart =()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    //const dispatch=useDispatch();

    return(
        <div className="cart">
           
           {cartItems.map((item,index)=>(
             <ItemList key={index} {...item}/>
           ))}
        </div>
    )
}
export default Cart;