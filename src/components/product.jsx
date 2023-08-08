import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props){
    useEffect(function(){
        console.log("hello im a product")
    },[]);
    
    return(
        <div className="product">
            <img src={"/images/"+ props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QuantityPicker/>
        </div>
        
    );
}

export default Product;