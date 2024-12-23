import { useSelector } from "react-redux"
import { Rest_IMG } from "../utils/constants";
import { ItemList } from "./ItemList";
import ItemListCart from "./ItemListCart"

const Cart1 = () => {
    //subscribing to store
    const { res, items, price } = useSelector((store) => {
        return store.cart;
    })
    console.log("items in cart1", items)
    if (!items.length || price == 0) {
        return (<div className=" font-bold text-lg w-11/12 h-svh mx-auto shadow-lg flex justify-center align-middle text-center">
            <div className="my-auto">
                <h1>ADD some items in Cart</h1>
                <h1>HAPPY SHOPPING!!!!</h1>
            </div>
        </div>)
    }



    return (
        <div ><div className=" ">
            <div className=" m-8 w-11/12 p-4  shadow-2xl   ">
                <div className=" ml-4 flex gap-2">
                    <img className="w-[50px] h-[50px]" src={Rest_IMG + res.cloudinaryImageId}></img>
                    <div className="  light-text-rgba">
                        <div className="font-bold">{res.name}</div>
                        <div className="font-semibold">{res.locality}</div>
                    </div>
                </div>

                <div className="p-4">
                    <ItemListCart data={items}></ItemListCart>
                </div>
                {/* { isNaN(price) &&  console.log("price ia nan")} */}
                {/* {console.log(price)} */}
                {!isNaN(price) && (

                    <div className="p-4 flex justify-evenly">
                        <h2 className="font-semibold ">To Pay</h2>
                        <h2 className=" border-t-2 border-black font-bold">Rs. {price}</h2>

                    </div>
                )}





            </div>


        </div>
        </div>)
}

export default Cart1