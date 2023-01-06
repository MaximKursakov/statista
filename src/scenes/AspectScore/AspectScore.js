import { MyResponsiveRadar } from "../Radar";
import { data, dataRefernce } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState } from "react";

export const AspectScore = () => {
    const [radarData, setRadarData] = useState([])
    
    return(
        <div className="aspect-score">
            <Filter radarData={radarData} setRadarData={setRadarData}></Filter>
            <div className="aspect-radar">
                <MyResponsiveRadar data={data} radarData={radarData}/>
            </div>
            <div className="review-bar">
                <MyResponsiveBar data={mockReviews}/>
            </div>
        </div>
    )
}