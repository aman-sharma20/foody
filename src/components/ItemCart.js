import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart, handleItemCount, itemCount, totalPrice,totalPriceMinus } from "../utils/cartSlice";
const ItemCart = ({ listItem }) => {
  const dispatch =useDispatch();
  console.log("ilisttem", listItem);

  const [count, setCount] = useState(1);
//   const {res,items,price}=useSelector((store)=>{
//     return store.cart;
// })return
// if(items.includes(item)){
//   console.log("item already there in cart")
//   ;
// }
  
  
  const handlePlus = (item) => {
    console.log("listitem in handle plus", item);
   
    const newCount = count + 1;
    setCount(newCount);
    // dispatch(handleItemCount());
    if(item.card.info.price){
      dispatch(totalPrice(item.card.info.price / 100));
    }
    

    console.log("itemcount", itemCount);
  };
  const handleMinus = (item) => {
    const newCount = count - 1;
    if (newCount >= 0) {
      dispatch(totalPriceMinus(item.card.info.price / 100));
      setCount(newCount);
    }
    if(newCount==0){
      
      console.log("count==0");
      
      console.log("clearcart hab called");
      dispatch(totalPrice(0)); 

    }
    // setCount(newCount);
    // console.log(newCount);
  };
  return count != 0 ? (
    <div className=" m-2   flex">
      <div className="flex gap-2 w-[300px] ">
        <div className="">
          {" "}
          {listItem.card.info.isVeg == 1 ? (
            <div className=" my-[6px] w-4 h-4 border-2 border-[#0f8a65]   flex items-center justify-center  ">
              <div className="rounded-full w-2 h-2 bg-[#0f8a65]"></div>
            </div>
          ) : (
            <div className=" my-[6px]  w-4 h-4 border-2  border-[#C21807] flex items-center justify-center  ">
              <div className="rounded-full w-2 h-2 bg-[#8a170f]"></div>
            </div>
          )}
        </div>
        <h2>{listItem.card.info.name}</h2>
      </div>
      

      <div className="counter border-2   flex mx-4">
        <button
          onClick={() => {
            handlePlus(listItem);
          }}
          className="border-r-2 p-1  "
        >
          +
        </button>
        <div className="flex align-middle justify-center w-[25px]">
          <div className="p-3 ">{count}</div>
        </div>

        <button
          onClick={() => {
            handleMinus(listItem);
          }}
          className="border-l-2 p-1"
        >
          -
        </button>
      </div>
      {listItem.card.info.price ? (
        <div className="price w-16  flex gap-1 p-1">
          <i className="fa text-sm p-1">&#xf156;</i>
          {listItem.card.info.price / 100}
        </div>
      ) : (
        <div></div>
      )}

      {/* <div>
    <div className="counter border-2   flex mx-4 ">
      <button onClick={()=>{handlePlus(listItem)}} className="border-r-2 p-1  ">+</button>
      <div className="flex align-middle justify-center w-[25px]"><div className="p-3 ">{count}</div></div>
      
      <button onClick={()=>{handleMinus(listItem)}} className="border-l-2 p-1">-</button>
     </div>
     {listItem.card.info.price?<div className="price w-16 bg-slate-700 flex gap-1 p-1"><i className="fa text-sm p-1">&#xf156;</i>{listItem.card.info.price/100}</div>:<div></div>}
     </div> */}
    </div>
  ) : (
    <div></div>
  );
};
export default ItemCart;
