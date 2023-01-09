import { MyResponsiveRadar } from "../Radar";
import { data, dataRefernce } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";
import { Filter } from "../../components/Filter";
import { useState, useEffect } from "react";
import { selectClasses, Slider } from "@mui/material"
import { RangeSlider } from "../../components/RangeSlider";
import { Stack } from "@mui/system";
import DatePicker from "../../components/DatePicker";
import { ProSidebarProvider, Sidebar } from "react-pro-sidebar";
import { Layout } from "../../components/SidebarLayout";
import { Aspect } from "../../components/Aspect";
import { Subscription } from "../Subscription";
import {BiBlock} from "react-icons/bi"


export const AspectScore = () => {
    const [SelectedCompany1, setSelectedCompany1] = useState("weber")
    const [SelectedCompany2, setSelectedCompany2] = useState()
    const [SelectedProduct1, setSelectedProduct1] = useState()
    const [SelectedProduct2, setSelectedProduct2] = useState()

    const [displayedData, setDisplayedData] = useState([])
    useEffect(() => {
        setDisplayedData([])
        if (SelectedProduct1 !== undefined) {
            setDisplayedData(prevDisplayedData => [SelectedProduct1, ...prevDisplayedData.slice(1)])
        } else setDisplayedData(prevDisplayedData => [SelectedCompany1, ...prevDisplayedData.slice(1)])
        if (SelectedProduct2 !== undefined) {
            setDisplayedData(prevDisplayedData => [SelectedProduct2, ...prevDisplayedData.slice(-1)])
        } else setDisplayedData(prevDisplayedData => [SelectedCompany2, ...prevDisplayedData.slice(-1)])
        setDisplayedData(current => current.reverse())
      }, [SelectedCompany1, SelectedCompany2, SelectedProduct1, SelectedProduct2])      
    return(
        <ProSidebarProvider>
            <Layout></Layout>
            <div className="aspect-score">
                <div className="filter">
                    <div className="filter__device center">
                        <h2>Device Type </h2>
                        <select>
                            <option>-- </option>
                            
                        </select>
                    </div>
                    <div className="filter__brand center">
                        <h2>Brand</h2>
                    <Filter radarData={SelectedCompany1} setRadarData={setSelectedCompany1} SelectedProduct={SelectedProduct1} setSelectedProduct={setSelectedProduct1} displayedData={displayedData} index={1}></Filter>
                    </div>
                    <div className="filter__date center">
                        <h2>Date</h2>
                        <div className="filter-align">
                        <input className="date" type="date" min="2021-05-03" max="2023-01-09" ></input>
                        <input className="date" type="date" min="2021-05-03" max="2023-01-09" ></input>
                        </div>
                    </div>
                    <div className="filter__price center">
                        <h2>Price</h2>
                    <RangeSlider SelectedCompany={SelectedCompany1}></RangeSlider>
                    </div>
                    <div className="filter__delete center">
                        <h2>placeholder</h2>
                        <button className="select" onClick={() => setDisplayedData([])}>Clear Filters</button>
                    </div>
                </div>
                <div className="aspect__content">
                        <Subscription/>
                        <div className="review">
                            <MyResponsiveBar data={mockReviews} displayedData={displayedData[0]}/>
                        </div>
                        <Aspect currentProduct={displayedData[0]}></Aspect>
                </div>
            </div>
        </ProSidebarProvider>
    )
}