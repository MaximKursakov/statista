import { ResponsiveRadar } from '@nivo/radar';
import React from 'react';

interface Props {
    displayedData: [],
    data : {
    aspect: string,
    weber: number,
    grillfuerst: number,
    }[],
    
}

export const MyResponsiveRadar:React.FC<Props> = ({ data, displayedData  }) => {
    return(
    <ResponsiveRadar
        data={data}
        keys={displayedData}
        indexBy="aspect"
        maxValue={1}
        valueFormat=">-.2%"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={.5}
        borderColor={{ from: 'color' }}
        gridLabelOffset={40}
        gridLevels={5}
        gridShape="circular"
        dotSize={0}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={2}
        colors={{ scheme: 'pastel1' }}
        blendMode="multiply"
        motionConfig="gentle"
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                translateX: 30,
                translateY: 30,
                itemWidth: 0,
                itemHeight: 30,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)}