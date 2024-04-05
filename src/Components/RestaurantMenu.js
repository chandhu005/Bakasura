//import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

export const RestaurantMenu = () => {
  //const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(0);
  /// how can an 

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=449`
  //     );
  //     const json = await data.json();

  //     setresinfo(json.data);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };

  if (resinfo === null) {
    return <Shimmer />;
  }

  const {name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  // console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")}-{costForTwoMessage}
        </p>
        {/*categories  accordians*/}
        {categories.map((category,index) => (
          <ResCategory data={category?.card?.card} key={category?.card?.card?.title} showItems={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}/>
        ))}
        {/* <ul>
          {itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name}-
              {items.card.info.price || items.card.info.defaultprice}
            </li>
          ))}
        </ul> */}
      </>
    </div>
  );
};
