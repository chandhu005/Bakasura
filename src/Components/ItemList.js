import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartslice"

const ItemList = ({ items }) => {
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    //dispatch an action
     dispatch(addItem(item))
  }
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          {" "}
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card?.info?.name}</span>
              <span>
                -₹
                {item.card?.info?.price
                  ? item.card?.info?.price / 100
                  : item.card?.info?.defaultprice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-0 left-0">
           
            <button className="p-2  bg-white text-green-500 font-semibold rounded-lg shadow-2xl" onClick={()=>handleAddItem(item)}>Add</button>
            </div>
            <img src={CDN_URL + item.card?.info?.imageId} alt="menuimg" />
            </div>
          </div>
        
      ))}
    </>
  );
};
export default ItemList;
