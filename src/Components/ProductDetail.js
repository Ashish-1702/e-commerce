import { useParams } from "react-router-dom";
import { URL } from "../Constants";
import {useState,useEffect} from "react";
import "./ProductDetail.css";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";


const ProductDetail = () =>{
      const params=useParams();
      const {id}=params;
      const dispatch=useDispatch();
      const[product,setProduct]=useState([]);

      useEffect(()=>{
          getProductSpecification()
      },[])

    async  function getProductSpecification (){
        const data=await fetch(URL);
        const json=await data.json();
        setProduct(json);
        console.log(json);
    }
    const handleItem=(item)=>{
        dispatch(addItem(item));
    }

    return(
        <div className="list">
            {/* <h1>Product id :{id}</h1> */}
            <img className = "image_ProductDetail" src={product[id-1]?.image}/>
            <h5> {product[id-1]?.title}</h5>
            <p className="productDescription">{product[id-1]?.description}</p>
            <h2 className="productPrice">Rs {product[id-1]?.price}</h2>
    
                <button className="btn" onClick={()=>handleItem(product[id-1])}>Add to Cart</button>
            
        </div>
    )
}
export default ProductDetail;