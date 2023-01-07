import { MyResponsiveRadar } from "../Radar";
import { data, dataRefernce } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState, useEffect } from "react";
import { selectClasses, Slider } from "@mui/material"
import { RangeSlider } from "../../components/RangeSlider";


export const AspectScore = () => {
    const [SelectedCompany1, setSelectedCompany1] = useState("weber")
    const [SelectedCompany2, setSelectedCompany2] = useState("grillfuerst")
    const [SelectedProduct1, setSelectedProduct1] = useState()
    const [SelectedProduct2, setSelectedProduct2] = useState()

    const [displayedData, setDisplayedData] = useState(["weber", "grillfuerst"])
    useEffect(() => {
        setDisplayedData([])
        if (SelectedProduct1 !== undefined) {
            setDisplayedData(prevDisplayedData => [SelectedProduct1, ...prevDisplayedData.slice(1)])
        } else setDisplayedData(prevDisplayedData => [SelectedCompany1, ...prevDisplayedData.slice(1)])
        if (SelectedProduct2 !== undefined) {
            setDisplayedData(prevDisplayedData => [SelectedProduct2, ...prevDisplayedData.slice(-1)])
        } else setDisplayedData(prevDisplayedData => [SelectedCompany2, ...prevDisplayedData.slice(-1)])
      }, [SelectedCompany1, SelectedCompany2, SelectedProduct1, SelectedProduct2])      
    console.log(displayedData)
    
    return(
        <div className="aspect-score">
            <Filter radarData={SelectedCompany1} setRadarData={setSelectedCompany1} SelectedProduct={SelectedProduct1} setSelectedProduct={setSelectedProduct1}></Filter>
            <Filter radarData={SelectedCompany2} setRadarData={setSelectedCompany2} SelectedProduct={SelectedProduct2} setSelectedProduct={setSelectedProduct2}></Filter>
            <RangeSlider SelectedCompany={SelectedCompany1} setSelectedCompany={setSelectedCompany1}></RangeSlider>
            <RangeSlider SelectedCompany={SelectedCompany2} setSelectedCompany={setSelectedCompany2}></RangeSlider>
            <div className="aspect-radar">
                <MyResponsiveRadar data={data} displayedData={displayedData}/>
            </div>
            <div className="review-bar">
                <MyResponsiveBar data={mockReviews} SelectedCompany1={SelectedCompany1}/>
            </div>
        </div>
    )
}