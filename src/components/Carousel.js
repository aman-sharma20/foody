import { useContext } from "react";
import useCarousel from "../utils/useCarousel";
import { Carousel_Img } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Carousel = () => {
    const carouseldata = useCarousel({});
    // console.log(carouseldata);
    const items=carouseldata?.imageGridCards?.info;
    // console.log("items",items);
    const {loggedInUser}=useContext(UserContext);
    function extractEntity(item){

        const parts = item.entityId.split('&');

        // Find the part containing 'collection_id'
        const collectionIdPart = parts.find(part => part.includes('collection_id='));
        
        // Extract the collection ID from the found part
        const collectionId = collectionIdPart.split('=')[1];
        return collectionId;
    }
    return (
      //  <h1>categoreis</h1>
         <div className="  m-auto mt-4 shadow-sm">
            <h1 className="text-left font-sans font-extrabold text-2xl text-[#02060ceb]">
                {loggedInUser!="@xyzabc"&&loggedInUser.length>3?loggedInUser+", "+carouseldata?.header?.title:carouseldata?.header?.title}
                
            </h1>
            <div className="flex  overflow-x-scroll touch-auto custom-scrollbar cursor-pointer">
            {items?.map((item)=>{
                console.log("item.entityid",item.entityId);
                return(
                    <Link to={!item.entityId.includes("collection_id") ? "/collections/" + item.entityId :"/collections/"+ extractEntity(item) } key={item.entityId}>
                    <div className="pr-[24px] w-full" key={item.id}>
                
                <div className="w-[144px] h-[180px] cursor-pointer">
                  <img  className=" object-cover " src={Carousel_Img+item.imageId}></img>
                 </div>
                  </div>
                  </Link>
                 
                  
                  )
            })}
            </div>
        </div> 
    );
};
export default Carousel;
{/* <Link to={"collections/"+item.entityId.includes(collection_id)=== false ?  item.entityId:"#"}>
</Link>  */}