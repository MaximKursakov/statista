import { MyResponsiveRadar } from "../Radar";
import { data, dataRefernce } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState } from "react";

export const AspectScore = () => {
    const [radarData1, setRadarData1] = useState("weber")
    const [radarData2, setRadarData2] = useState("grillfuerst")
    console.log(radarData1, radarData2)
    
    return(
        <div className="aspect-score">
            <Filter radarData={radarData1} setRadarData={setRadarData1}></Filter>
            <Filter radarData={radarData2} setRadarData={setRadarData2}></Filter>
            <div className="aspect-radar">
                <MyResponsiveRadar data={data} radarData1={radarData1} radarData2={radarData2}/>
            </div>
            <div className="review-bar">
                <MyResponsiveBar data={mockReviews}/>
            </div>
        </div>
    )
}