import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard /*{ withPromottedLabel } */ from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import GuessingGame from "../utils/GuessGame";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //const RestaurantCardPromoted=withPromottedLabel(RestaurantCard)
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const {loggedInUser,setUserName}=useContext(UserContext);

  useEffect(() => {
    fetchData();
   }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurant = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRatedFilter = () => {
    const topRatedList = listofRestaurants.filter((res) => res.info.avgRating > 3.99);
    setFilteredRestaurant(topRatedList);
  };

  const OnlineStatus=useOnlineStatus();
  if(OnlineStatus===false){
    return(<>
    <h1>OOPS!!!Look's you are offline please check your internet connection </h1>
    <GuessingGame/>
    </>
  )}
   return !listofRestaurants || listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body container mx-auto p-8">
      <div className="filter flex items-center my-4">
        <div className="search flex items-center m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-400 rounded-md p-2 mr-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-blue-500 text-white px-4 rounded-md" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 ">
        <button className="bg-green-500 px-4 text-white rounded-md" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
        </div>
        <div className="Search m-4 p-4">
          <label className="m-2">Username:</label>
        <input
            
            className="border border-solid border-gray-400 rounded-md p-2 mr-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}
            
          />
        </div>
      </div>

      <div className="resto-Container flex flex-wrap justify-between gap-1">
        {filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((res) => (
            <><Link key={res?.info.id}  to={"/restaurants/" +res?.info.id}>
              {/* {/*if the Restuarnt is promoted then add a promoted
              
              res.data.promoted?(<RestaurantCardPromoted resData={res} />):
              <RestaurantCard  resData={res} />  } */}
               <RestaurantCard  resData={res} />
            </Link></>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;


