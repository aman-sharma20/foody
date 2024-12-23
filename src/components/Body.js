import Restcard, { WithDiscount } from "./RestCard";
import Shimmer from "./Shimmer";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../useResList";
import UserContext from "../utils/UserContext";
import Carousel from "./Carousel";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const resList = useResList();
  //
  
  // console.log("userinfo",loggedInUser)
  const {loggedInUser,setUserName}=useContext(UserContext);
  // const data=useContext(UserContext);
  // console.log("data",data)
 

  //higher order component ka instance bnana pdea to use it in differnet module
  const RestCardDiscount = WithDiscount(Restcard);
//  console.log(resList)
  useEffect(() => {
    setFilteredRestaurants(resList);
    setlistOfRestaurants(resList);
  }, [resList]);
  // console.log(listOfRestaurants)
  


  if (listOfRestaurants.length===0) {
    return <Shimmer />;
  }
  if (onlineStatus === false) {
    return <h1>Check Your Internet Connection</h1>;
  }
  // console.log("listres", listOfRestaurants);

  return (
    <div className="w-10/12 m-auto no-underline">
      <Carousel/>

      <div className="flex  mt-4 mb-2 justify-evenly">
        
          <button
            className="hover:scale-105 font-semibold text-lg  p-[6px] border-solid border-red-400 border-2  rounded-[5px]"
            onClick={() => {
              let filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4;
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            {" "}
            Top Rated Restaurants★ {" "}
          </button>
        
        <div className="w-1/2 hover:scale-105">
          <input 
            type="text"
            placeholder=""
            
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="outline-none text-lg px-[4px] border-rose-400 border-2 py-[6px] rounded-[5px] w-9/12"
          ></input>
          

          <button
            className=" hover:scale-105 font-medium text-lg  py-[6px] p-2 w-max border-solid border-red-400 border-2 border-l-0  rounded-[5px]"
            onClick={() => {
              const filteredRestaurantList = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurants(filteredRestaurantList);
            }}
          >
           Search <i className="fa ">&#xf002;</i>
          </button>

        </div>
        <div  className=" text-lg  p-[6px] border-solid border-red-400 border-2  rounded-[5px]">
        <input placeholder="Enter Username" className="outline-none" type="text" value={loggedInUser=="@xyzabc"?"":loggedInUser} onChange={(e)=>{
          setUserName(e.target.value);
        }}>
         {/* {console.log("username",userName)} */}
        </input>
        </div>
      </div>

      
      <div className="flex flex-wrap gap-8 mt-8 mb-8 ml-8 mr-8 ">
        
        {filteredRestaurant.map((restaurant) => {
          {/* console.log(restaurant) */}
          return (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* if disocunt is there show the deal  .discount label*/}
              {
                restaurant.info.aggregatedDiscountInfoV3 ? <RestCardDiscount resData={restaurant.info} /> : <Restcard resData={restaurant.info} />
              }
            </Link>
          );
        })}
        
      </div>
    </div>
  );
};
export default Body;
