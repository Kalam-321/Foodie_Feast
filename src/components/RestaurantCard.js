import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo} = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="w-[250px] h-[170px] rounded-lg" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-3 text-lg" >{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

export const withLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }   
}

export default RestaurantCard;