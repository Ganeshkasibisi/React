import {useState, useEffect} from 'react';

const useRestaurantMenu = (resId)=>{
const[resInfo, setResInfo] = useState(null);

useEffect(()=>{
     fetchData();
},[])

const fetchData = async ()=>{
    const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9027471&lng=77.6349979&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"

    );
    const json = await data.json();
    setResInfo(json.data);
};
return resInfo;

};
export default useRestaurantMenu;