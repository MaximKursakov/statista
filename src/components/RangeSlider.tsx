import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { dataRefernce } from "../data/mockdata"

function valuetext(value: number) {
  return `${value}€`;
}

interface Props {
  min: number,
  max: number,
  SelectedCompany: string,
  setSelectedCompany: Function
}

export const RangeSlider:React.FC<Props> = ({min,max, SelectedCompany, setSelectedCompany}) => {
  const [value, setValue] = React.useState<number[]>([0, 1000]);

  const [minValue, setMinValue] = React.useState<number>()
  const [maxValue, setMaxValue] = React.useState<number>()

  React.useEffect(() => {
    setValue([0, 1000])
    dataRefernce.map((item) => {
      if(item.name === SelectedCompany) {
        let priceArray: number[] = []
        item.products.map((product) => {
          priceArray.push(product.price)
        })
        setMinValue(Math.min(...priceArray))
        setMaxValue(Math.max(...priceArray))
      }
    })
  }, [SelectedCompany])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        sx={{
          color:"#0b141e"
        }}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}