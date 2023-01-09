import { useState } from "react"
import { data, dataRefernce } from "../data/mockdata"

export const Filter = ({radarData, setRadarData, SelectedProduct, setSelectedProduct, displayedData, index}) => {
    function filterData(e) {
        setRadarData(e)
        setSelectedProduct(undefined)
    }

    return (
        <div className="filter__company filter-align">
        <select onChange={(e) => filterData(e.target.value)} name="company" id="select-company">
            <option value="">Company</option>
            {dataRefernce.map((item) => {
                console.log(displayedData[index] === item.name)
            return(
                <>
                {displayedData[index] !== item.name ?
                    <option key={item.name} value={item.name} selected={item.name === displayedData[0] ? "selected" : null}>{item.name}</option>
                    : null}
                </>
                )
            })}
        </select>
        <select onChange={(e) => setSelectedProduct(e.target.value)} name="products" id="select-product">
            <option value="">Product</option>
            {dataRefernce.map((item) => {
                if (item.name === radarData) {
                    return item.products.map((product) => {
                        return(
                            <>
                            {!displayedData.includes(product.name) ?
                            <option key={product.name} value={product.name} >{product.name}</option>
                            : null}
                            </>
                        )
                    })
                }
            })}
        </select>
        </div>
    )
}

//wenn in radardata bereits data drinnen ist mit