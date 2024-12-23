import { useEffect, useState } from "react";

const Star = ({ rating }) => {
    if(!rating){
        return(<div></div>)
    }
    const [stars,setStars]= useState([]);
    
    useEffect(()=>{
        const starArr=[];
        for(let i=1;i<=rating;i++){
            starArr.push(
                <i key={i} className="my-2 mx-1  font-semibold text-[12px] fa text-white">&#xf005;</i>
            )
        }
        setStars(starArr)
    },[rating])
    
    // console.log(stars)
   return(<div  className="rounded-lg w-max  h-max bg-green-400  " >{stars}</div>)
}
export default Star;