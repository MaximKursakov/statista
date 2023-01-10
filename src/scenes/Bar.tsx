import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'
import Rating from "@mui/material/Rating/Rating"
import "./Bar.scss"

interface Props {
    displayedData: string,
    data : {
    "review" : string,
    [key: string]: any
    }[]
}

export const MyResponsiveBar:React.FC<Props> = ({ data, displayedData }) => {
    
    const [Total, setTotal] = useState<number>(0)
    const [totalReviews, setTotalReviews] = useState<number>(0)
    const [Average, setAverage] = useState<number>(0)
    
    useEffect(() => {
        setTotal(getTotalReviews(displayedData))
        setTotalReviews(Total)
        setAverage(starsSummed(displayedData))
    }, [displayedData])
    function getTotalReviews(item : string) {
        const summedArray = data.reduce((acc, cur) => acc + cur[item], 0)
        if (isNaN(summedArray)) {
            return 0;
        }
        return summedArray;
    }
    function starsSummed(item : string) {
        let i = 0
        let product = data.reduce((acc, cur) => {
            i++
            return (acc + i * cur[item])
            }, 0);
            
        return product 
    }
    function getAverageStars(average : number, total : number) {
        if (isNaN(average)) {
            return 0;
        }
        return (average / total).toFixed(1)
    }
    return(
        <>
        <div className='review__header'>
        <h2>Reliable Reviews</h2>
        <p className='description'>Anti-spam filtered Reviews</p>
        <div className='review__general'>
            <p className='general__score emphasize'>{getAverageStars(Average, Total)}/5</p>
            <Rating 
                name="read-only" 
                value={+getAverageStars(Average, Total)} 
                precision={0.1}
                sx={{color : "#f7d350"}}
                readOnly />
            <p><span className='emphasize'>{Total}</span></p>
         </div>
         </div>
         <div className='review-bar-container'>
            <div className='review__bar'>
            <ResponsiveBar
            data={data}
            keys={[displayedData]}
            indexBy= "review"
            margin={{ top: 0, right: 0, bottom: 0, left: 30 }}
            padding={0.85}
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
        </div>
        <div className='review__bar-data'>
            {data.map((review : any) => {
                return (
                    <div>
                        {review[displayedData]}
                    </div>
                )
            })}
        </div>
    </div>
    </>
)}