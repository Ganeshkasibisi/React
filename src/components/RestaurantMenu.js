
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from'./RestaurantCategory'
import ShimmerMenu from './ShimmerMenu';


const RestaurantMenu = () =>{
    
 const {resId} = useParams();
 const [showIndex, setShowIndex] = useState(null);


  const resInfo = useRestaurantMenu(resId);

 


if (resInfo === null) return (<ShimmerMenu/>);


const {deliveryTime} = resInfo?.cards[2]?.card?.card?.info?.sla;
const {name, cuisines, costForTwoMessage,cloudinaryImageId,locality, totalRatingsString, avgRating} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

const categories =
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) =>
    c.card?.card?.['@type'] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)



return ( 
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
          
        ))}
    </div>
)
}


export default RestaurantMenu; 