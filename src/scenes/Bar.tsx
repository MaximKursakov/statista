import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'
import Rating from "@mui/material/Rating/Rating"

interface Props {
    data : {
    "review" : string,
    "score" : number
    }[]
}

export const MyResponsiveBar:React.FC<Props> = ({ data  }) => {
    const totalReviews = data[0].score + data[1].score +data[2].score+data[3].score+data[4].score
    let averageStars = (5 * data[0].score + 4 * data[1].score + 3 * data[2].score + 2 * data[3].score + 1 * data[4].score) / totalReviews
    const roundedAvgStars = averageStars.toFixed(1)
    return(
        <>
        <h2>{roundedAvgStars}/5</h2>
        <Rating 
            name="read-only" 
            value={4.2} 
            precision={0.1}
            readOnly />
        <p>{totalReviews} Reviews</p>
    <ResponsiveBar
        data={data}
        keys={[
            "score"
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
        motionConfig="gentle"
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </>
)}