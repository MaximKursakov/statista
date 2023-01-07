import { useState } from "react"
import { data, dataRefernce } from "../data/mockdata"

export const Filter = ({radarData, setRadarData}) => {
    function updateData(data) {
        if(!radarData.includes(data)) {
            setRadarData(radarData.concat(data))
        } 
    }
    function filterData(e, prod){
        if (prod === undefined){
            setRadarData(e.target.value)
        } 
        else updateData(prod.name)
    }
    return (
        <>
        <select onChange={(e) => filterData(e)} name="company" id="select-company">
            <option value="">Company</option>
            {dataRefernce.map((item) => {
            return(
                <>
                    <option value={item.name} selected={item.name === radarData ? "selected" : null}>{item.name}</option>
                </>
                )
            })}
        </select>
        
        </>
    )
}

//wenn in radardata bereits data drinnen ist mit