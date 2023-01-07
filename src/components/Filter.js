import { useState } from "react"
import { data, dataRefernce } from "../data/mockdata"

export const Filter = ({radarData, setRadarData, SelectedProduct, setSelectedProduct}) => {
    function filterData(e) {
        setRadarData(e)
        setSelectedProduct(undefined)
    }

    return (
        <>
        <select onChange={(e) => filterData(e.target.value)} name="company" id="select-company">
            <option value="">Company</option>
            {dataRefernce.map((item) => {
            return(
                    <option value={item.name} selected={item.name === radarData ? "selected" : null}>{item.name}</option>
                )
            })}
        </select>
        <select onChange={(e) => setSelectedProduct(e.target.value)} name="products" id="select-product">
            <option value="">Product</option>
            {dataRefernce.map((item) => {
                if (item.name === radarData) {
                    return item.products.map((product) => {
                        return(
                            <option value={product.name} >{product.name}</option>
                        )
                    })
                }
            })}
        </select>
        </>
    )
}

//wenn in radardata bereits data drinnen ist mit