import { useEffect, useState, useContext } from "react";
import { ItemList } from "./ItemList";
import UserContext from "../utils/UserContext";
const RestaurantCategory = (props) => {
  //  console.log( "props.data",props.data);
  const { showItem } = props;
  const { setShowIndex } = props;
  const {resInfo}=props;
  const { title, itemCards } = props.data;
  const { setValVegBtn, vegBtn, nonVegBtn, setValNonVegBtn } =
    useContext(UserContext);
  // const [restaurantCart,setRestaurantCart]=useState();

  //for collapsing
  // const [showItem,setShowItem]=useState(false);
  // console.log("categories",categories)
  // console.log("itemcards",itemCards)
  const allCards = props.data.itemCards;
  const handleClick = () => {
    // console.log("clicked");
    //toggling
    // setShowItem(!showItem);
    // setShowItem(showIndex);

    //prop function called
    setShowIndex();
  };
  // console.log("ietmcards",itemCards)
  let itemCard;
  if (vegBtn === 1 && nonVegBtn === 0) {
    // console.log("vegbtn clicked")
    itemCard = itemCards.filter((item) => {
      return item.card.info.isVeg == 1;
    });
  } else if (nonVegBtn === 1 && vegBtn === 0) {
    // console.log("nonvergclicked");

    itemCard = itemCards.filter((item) => {
      return !item.card.info.isVeg;
    });
    //  console.log("itemcard",itemCard)
  } else if (vegBtn === 0 && nonVegBtn === 0) {
    itemCard = itemCards;
  }

  return (
    <div>
      {/* accordion header */}
      {itemCard.length !== 0 && (
        <div>
          <div
            className="cursor-pointer flex bg-gray-100 shadow-lg justify-between p-4 m-4  "
            onClick={handleClick}
          >
            <div className="font-bold text-lg">
              {title} ({itemCard.length})
            </div>
            <button className=" fa text-lg font-bold">&#xf107;</button>
          </div>
          {/* accordion body */}
          {showItem && <ItemList  resCart={resInfo} data={itemCard} />}
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
