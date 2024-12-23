import DiscountCard from "./DiscountCard";
const Deals = ({ data }) => {
  
  
  return (
    <div className="p-4  shadow-md ">
      <h2 className="text-lg font-semibold">Top Deals For You</h2>
      <div className="   flex flex-grow-0 p-4 gap-4 overflow-x-scroll custom-scrollbar ">
        {data.map((disc) => {
          return <DiscountCard data={disc.info} />;
        })}
      </div>
    </div>
  );
};
export default Deals;
