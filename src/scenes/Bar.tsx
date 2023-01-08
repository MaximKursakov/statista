import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'
import Rating from "@mui/material/Rating/Rating"

interface Props {
    displayedData: string,
    data : {
    "review" : string,
    [key: string]: any
    }[]
}

export const MyResponsiveBar:React.FC<Props> = ({ data, displayedData }) => {
    
    // const totalReviews = data[0][displayedData] + data[1][displayedData] + data[2][displayedData] + data[3][displayedData] + data[4][displayedData]
    function getTotalReviews(item : string) {
        return data.reduce((acc, cur) => acc + cur[item], 0);
    }
    const [Total, setTotal] = useState<number>(0)
    const [totalReviews, setTotalReviews] = useState<number>()
    useEffect(() => {
        setTotal(getTotalReviews(displayedData))
        setTotalReviews(Total)
        console.log(Total)
    }, [displayedData])
    // let averageStars = (1 * data[0][displayedData] + 2 * data[1][displayedData] + 3 * data[2][displayedData] + 4 * data[3][displayedData] + 5 * data[4][displayedData]) / totalReviews
    // const roundedAvgStars = averageStars.toFixed(1)
    return(
        <>
        {/* <h2>{roundedAvgStars}/5</h2> */}
        <Rating 
            name="read-only" 
            // value={+roundedAvgStars} 
            precision={0.1}
            sx={{color : "#f7d350"}}
            readOnly />
         <p>{displayedData}: {Total} Reviews</p>
    <ResponsiveBar
        data={data}
        keys={[displayedData]}
        indexBy= "review"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.75}
        innerPadding={1}
        maxValue={Total}
        groupMode="stacked"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={"#f7d350"}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: "#f7d350",
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: "#f7d350",
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