import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data, showItems,setShowIndex,collapse})=>{
    const handleClick = ()=>{
        showItems ? collapse() : setShowIndex();
    }
    return (
        <div className="w-6/12 mx-auto my-4 py-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items = {data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;