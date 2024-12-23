import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import ItemCart from "./ItemCart";


const ItemListCart=({data})=>{
    console.log("data",data);
    //subscribing to store 
    // const {items}=useSelector((store)=>{
    //     return store.cart.items;})

    //     console.log("items",items)

    return(
        data.map((item)=>{
            
            return(<ItemCart listItem={item}></ItemCart>)
        })
    )
}
export default ItemListCart