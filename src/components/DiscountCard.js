import { DiscIcon } from "../utils/constants";
const DiscountCard = ({ data }) => {
  // console.log("data", data);
  const { header,couponCode } = data;

  return (
    <div className="  w-full rounded-lg border-2 border-[#f05a35]    ">
      <div className="w-[330px] flex gap-3 p-2" >
        <div className="">
        <img className="h-[48px] w-[48px]" src={DiscIcon}></img>
        </div>
        <div>
          <div className="text-lg font-bold ">{header}</div>
          <div className="text-sm font-bold text-[#02060c73]">{couponCode}</div>
        </div>
      </div>
    </div>
  );
};
export default DiscountCard;
