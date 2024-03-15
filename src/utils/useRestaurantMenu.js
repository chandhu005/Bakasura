import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
