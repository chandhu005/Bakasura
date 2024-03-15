import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla,costForTwo } =
    resData?.info;

    console.log(resData);
  return (
    <div className="relative">
      <div className="w-72 h-80 rounded-t-2xl my-4" data-testid="resCard">
        <img
          className="w-full h-1/2 rounded-t-2xl hover:scale-90 bg-blend-darken hover:brightness-50"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Logo"
        />
        <div className="w-full h-1/2 rounded-b-2xl px-3 py-3 shadow-xl text-white hover:scale-110">
          <h1 className=" text-stone-950 italic font-bold mb-1 py-0">{name}</h1>
          <h5 className="text-stone-400 font- py-0">{cuisines.join(", ")}</h5>
          <span className="text-stone-400 font-bold py-0">⭐{avgRating}|</span>
          <span className="text-stone-400 font-bold py-0">{costForTwo}</span>
          <h5 className="text-stone-400 font-bold py-0">{sla.slaString}</h5>
        </div>
      </div>
    </div>
  );
};
// export const  withPromottedLabel= (RestaurantCard)=>{ return ()=>{
//     return <div>
//       <label>Prommoted</label>
//       <RestaurantCard/>
//     </div>
//   }

// }
//Higher order Component 


//input - resterocard 
// output - restro card prommoted 

export default RestaurantCard;

//
