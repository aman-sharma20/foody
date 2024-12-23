import { useEffect, useState } from "react"
import { HOME_API } from "./constants";
const useCarousel=()=>{
    const [carouseldata,setCarouselData]=useState({});
    const fetchCarousel=async ()=>{
           const data= await fetch("https://backendfood-app.onrender.com/api/restaurants?lat=29.15010&lng=75.71760");
           const json =await data.json();
        //    console.log("json",json)
        //    console.log(json?.data?.cards[0]?.card?.card);
           setCarouselData(json?.data?.cards[0]?.card?.card);
    }
    useEffect(()=>{
        fetchCarousel();
    },[])
    return carouseldata;
}
export default useCarousel;