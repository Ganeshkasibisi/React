import {CDN_URL} from "../utils/constants";

//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
        <img className="w-[250px] h-[150px] rounded-lg"
         src={CDN_URL+resData.info.cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.deliveryTime} mins</h4>
        <h4>{resData.info.costForTwo} </h4>
    </div>);
}

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg">
                    Promoted
                </label>
                <RestaurantCard/>
            </div>
        )
    }
}



export default RestaurantCard;