import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import Deals from "./Deals";

const RestaurantMenu = () => {
  const paramsmenu= useParams();
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  //state variable to make RestCat controlled component and as a prop i have to send set function
  const [showIndex, setShowIndex] = useState(0);
  const [vegClicked, setVegClicked] = useState(false);
  const [nonVegClicked, setNonVegClicked] = useState(false);
  

  if (resInfo === null) {
    return <Shimmer />;
  }

  const newResInfo = resInfo?.cards.filter((c) => {
    return (
      c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" ||
      c?.groupedCard
    );
  });
  // console.log("resInfo", resInfo);
  // console.log("newresinfo", newResInfo);

  const {
    name,
    costForTwoMessage,
    cuisines,
    id,
    sla,
    veg,
    locality,
    avgRating,
    city,
    areaName,
    aggregatedDiscountInfo,
    totalRatingsString,
    feeDetails
  } = newResInfo[0]?.card?.card?.info;
  const infoCart=newResInfo[0]?.card?.card?.info;
  console.log("newresinfo", newResInfo);
  const offers = resInfo.cards[3].card.card.gridElements.infoWithStyle.offers;
    
    // console.log("feeDetails",feeDetails)
  console.log("offers", offers);

  const allCategories =
    newResInfo[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  
  console.log("allcategories", allCategories);
 
  const { setValVegBtn, vegBtn, nonVegBtn, setValNonVegBtn } =
    useContext(UserContext);
  const handleVegClick = () => {
    // console.log("before",vegBtn);
    setValNonVegBtn(0);
    setValVegBtn(1);
    // console.log("after",vegBtn);
    setNonVegClicked(false);
    setVegClicked(true);
  };
  const handleNonVegClick = () => {
    // console.log("before",nonVegBtn);
    setValVegBtn(0);
    setValNonVegBtn(1);

    // console.log("after",nonVegBtn);
    setVegClicked(false);
    setNonVegClicked(true);
  };

  return (
    <div className="w-1/2 mx-auto my-11 ">
      <div className=" rounded-b-[36px] border-t-0 border-l-0 border-r-0 border-4 bg-gradient-to-bl from-[#ffffff] to-[#ececf2] border-gray-500 p-4">
        <div className=" m-2 mt-4 text-left border-dashed border-b-2 border-[#d3d3d3]  ">
          <div className=" font-bold text-4xl p-2">{name}</div>
          <div className="px-2">{cuisines.join(",")}</div>
          <div className="px-2">{areaName}</div>
        </div>

        <div className="p-2 font-semibold text-lg">
          <i className="fa p-1 mx-2   bg-green-500 rounded-full text-white">
            &#xf005;
          </i>
          {avgRating}
          <span className="font-semibold">({totalRatingsString})</span>
        </div>
        <div className="p-2"><i className="fa  mx-2">&#xf206;</i>{feeDetails.message}</div>
        <div className="flex gap-4 font-semibold text-lg">
          <div className="p-2">
            <i className="fa text-lg px-2">&#xf017;</i>
            {sla.deliveryTime} MINS
          </div>
          <div className="p-2">{costForTwoMessage}</div>
        </div>
      </div>
      <Deals data={offers} />
      <div className="p-4 flex font-semibold  justify-start gap-8">
        <button
          onClick={handleVegClick}
          className={`cursor-pointer text-lg p-2 border-2 border-gray-400 rounded-xl ${
            vegClicked == 1 ? "bg-[#0ac207]" : ""
          } `}
        >
          Veg
        </button>
        <button
          onClick={handleNonVegClick}
          className={`cursor-pointer p-2 text-lg  border-2 border-gray-400 ${
            nonVegClicked == 1 ? "bg-[#C21807]" : ""
          } rounded-xl`}
        >
          Non veg
        </button>
      </div>
      {/* categories */}
      
      {allCategories.map((c, index) => {
        return (
          <RestaurantCategory
            data={c.card.card}
            key={c.card.card.title}
            showItem={index === showIndex && true}
            setShowIndex={() => {
             
              //toggling
              setShowIndex(index === showIndex ? null : index);
            }}
            resInfo={infoCart}
            
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
