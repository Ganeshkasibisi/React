import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";

import {useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


//2. Body Component
const Body = () => {
    /*
    Local state variable = Super powerful variable
    restaurantList - default value
    */
    const promotedRestaurant = withPromotedLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9027471&lng=77.6349979&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        
         const json =  await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    };
    if(onlineStatus === false){
        return <h1>Looks like You're Offline, Please check your internet Connection</h1>
    }
    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length===0 ?(<Shimmer/>) 
    : (<div className="header">
        <div className="flex ">
            <div className='search m-2 p-2 '>
                <input type="text"
                placeholder="Search..." 
                className="searchBox border border-solid border-black"
                value={searchRestaurant}
                onChange={(e) =>{
                    setSearchRestaurant(e.target.value);
                }}
                />
                <button className="  bg-gray-100  rounded-lg"
                onClick={() =>{
                    const filteredRestaurants = listOfRestaurants.filter((res) =>{
                        return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())

                    });
                    setFilteredRestaurants(filteredRestaurants);
                }}
                >
                    Search
                </button>
            </div>
        
        <button className=" bg-gray-100 m-2 px-2 py-0 rounded-lg h-14"
         onClick={() => 
            {
                const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                setFilteredRestaurants(filteredList);//updating the state
            }}>
            Top Rated Restaurants
        </button>
        <div className="p-4 m-4 items-center flex">
            <label>UserName:</label>
          <input className="border border-black p-2"
          value={loggedInUser}      
          onChange={(e)=> setUserName(e.target.value)} 
          />  
            </div>
        </div>
       
        <div className="flex flex-wrap">
            {
                filteredRestaurants.map((restaurant) => (
                  <Link 
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                  }}
                  key={restaurant.info.id }
                  to={"/restaurants/"+restaurant.info.id}> 
                  {restaurant.info.promoted
                  ?<promotedRestaurant  resData={restaurant}/>
                  : <RestaurantCard  resData={restaurant}/>
                }
                  </Link>
                ))
            }
        </div>
    </div>
    )
}

export default Body;