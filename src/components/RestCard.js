import { CDN_URL } from "../utils/constants";
import Star from "./Star";

const Restcard = (props) => {
  const { resData } = props;
  console.log("newresdata",resData);

  return (
    <div className=" w-[273px] h-min-[294px] grid gap-3  ">
      <div className="     hover:scale-95  hover: z-0">
        <div className="">
          <img
            className=" w-[273px] h-[182px] object-cover rounded-md"
            src={CDN_URL + resData.cloudinaryImageId}
          ></img>
        </div>
        <div className="ml-3 mt-3">
          <h1 className="font-sans text-[18px] font-bold mt-[2px]">{resData.name}</h1>
          <div className="flex gap-3">
          <Star key={resData.id} rating={resData.avgRating} />
          <h3 className="font-sans text-xl font-semibold">
            <span className="font-sans text-xl font-bold ">
              {resData.sla.deliveryTime}
            </span>{" "}
            {" minutes"}
          </h3>
          </div>
          <h3 className="font-sans text-lg text-[#02060c99] font-semibold  mt-[2px] leading-5 ">
            {resData.cuisines.slice(0,3).join(", ")}
          </h3>
          
          
          
        </div>
      </div>
    </div>
  );
};
//higher order component ,props are passes to component and are further passes into component using spread operator,we can use this by making new restcard of it by calling this higher order component 
//const new card= withdiscount(restcard)
{/* <restcard  resdata=RestaurantMenu.info /> */}
export const WithDiscount=(RestCard)=>{
return (props)=>{
  return(
    <div className="relative">
        <label className="bg-[#f05a35] rounded-md w-max z-10 absolute  top-[10px] -left-5 text-white text-xl p-1 font-semibold ">Offer Available</label>
        <RestCard className="" {...props} />
    </div>
  )
}
}

export default Restcard;
