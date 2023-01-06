import { useState } from "react"
import { data, dataRefernce } from "../data/mockdata"

export const Filter = ({radarData, setRadarData}) => {
    function filterData(item){
        if(!radarData.includes(item.name)) {
            setRadarData(radarData.concat(item.name))
        }
    }
    console.log(dataRefernce)
    return (
        <>
        {dataRefernce.map((item) => {
            return(
                <>
                <div>
                    <button onClick={() => filterData(item)}>{item.name}</button>
                </div>
                <div>
                    {item.products.map((prod) => {
                        return(
                            <button onClick={() => filterData(prod)}>{prod.name}</button>
                        )
                    })}
                </div>
                </>
                )
            })}
        </>
    )
}