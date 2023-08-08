import Product from "../components/product";
import "./catalog.css"
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const[products, setProduct] = useState([]);
    const[category, setCategory] = useState([]);
    const[prodsToDisplay, setProdsToDisplay] = useState([])

    useEffect (function() {
        console.log("the component if loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProduct();
        console.log(prods);
        setProduct(prods);
        let cats = ["fruit", "berry", "exoticFruit"];
        setCategory(cats);
        setProdsToDisplay(prods);
    };
    function filter(cate){
        console.log(cate);

        let list=[];
        for (let i=0; i<products.length; i++){
            let prod = products[i];
            if (prod.category === cate){
                list.push(prod);
            }
        }
        console.log(list);
        setProdsToDisplay(list);
    }

    function clearFilter(){
        setProdsToDisplay(products);
    }


    return(
        <div className="catalog">

            <h1>This catalog {products.length} is crazy</h1>
            
            <br/>
            <button onClick={clearFilter} className="btn btn-sm btn-primary btn-filter">All</button>
            {category.map(c => <button key={c} onClick={()=>filter(c)} className = "btn btn-sm btn-primary btn-filter"> {c} </button>)}
            <br/>
            {prodsToDisplay.map(p => <Product key={p.id} data={p}></Product>)}
        </div>
    );
}

export default Catalog;