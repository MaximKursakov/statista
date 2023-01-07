import { MyResponsiveRadar } from "../Radar";
import { data, dataRefernce } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState } from "react";

export const AspectScore = () => {
    const [SelectedCompany1, setSelectedCompany1] = useState("weber")
    const [SelectedCompany2, setSelectedCompany2] = useState("grillfuerst")
    
    
    return(
        <div className="aspect-score">
            <Filter radarData={SelectedCompany1} setRadarData={setSelectedCompany1}></Filter>
            <Filter radarData={SelectedCompany2} setRadarData={setSelectedCompany2}></Filter>
            <div className="aspect-radar">
                <MyResponsiveRadar data={data} SelectedCompany1={SelectedCompany1} SelectedCompany2={SelectedCompany2}/>
            </div>
            <div className="review-bar">
                <MyResponsiveBar data={mockReviews} SelectedCompany1={SelectedCompany1}/>
            </div>
        </div>
    )
}