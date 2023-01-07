import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'
import Rating from "@mui/material/Rating/Rating"

interface Props {
    SelectedCompany1: string,
    data : {
    "review" : string,
    [key: string]: any
    }[]
}

export const MyResponsiveBar:React.FC<Props> = ({ data, SelectedCompany1 }) => {

    
    const totalReviews = data[0][SelectedCompany1] + data[1][SelectedCompany1] + data[2][SelectedCompany1] + data[3][SelectedCompany1] + data[4][SelectedCompany1]
    let averageStars = (5 * data[0][SelectedCompany1] + 4 * data[1][SelectedCompany1] + 3 * data[2][SelectedCompany1] + 2 * data[3][SelectedCompany1] + 1 * data[4][SelectedCompany1]) / totalReviews
    const roundedAvgStars = averageStars.toFixed(1)
    return(
        <>
        <h2>{roundedAvgStars}/5</h2>
        <Rating 
            name="read-only" 
            value={+roundedAvgStars} 
            precision={0.1}
            readOnly />
         <p>{totalReviews} Reviews</p>
    <ResponsiveBar
        data={data}
        keys={[
            SelectedCompany1
        ]}
        indexBy= "review"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.85}
        maxValue={totalReviews}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderRadius={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        enableGridY={true}
        enableLabel={false}
        labelSkipWidth={1}
        labelSkipHeight={1}
        labelTextColor="#636363"
        legends={[]}
        motionConfig="default"
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </>
)}