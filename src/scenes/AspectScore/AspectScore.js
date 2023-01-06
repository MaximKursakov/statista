import { MyResponsiveRadar } from "../Radar";
import { data, secondData } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState } from "react";

export const AspectScore = () => {
    const [radarData, setRadarData] = useState([])
    function filterData(name){
        if(!radarData.includes(name)) {
            setRadarData(radarData.concat(name))
        }
    }
    
    return(
        <div className="aspect-score">
            {secondData.map((name) => {
            return(
                <>
                <button onClick={() => filterData(name)}>{name}</button>
                </>
                )
            })}
            <Filter></Filter>
            <div className="aspect-radar">
                <MyResponsiveRadar data={data} radarData={radarData}/>
            </div>
            <div className="review-bar">
                <MyResponsiveBar data={mockReviews}/>
            </div>
        </div>
    )
}