import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    //fetch data
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://backendfood-app.onrender.com/api/restaurants/Menu?lat=29.15010&lng=75.71760&resId=${resId}` );
        const json = await data.json();
        setResInfo(json?.data);
        // console.log("resInfo",resInfo)


    }
    return resInfo;
}
export default useRestaurantMenu