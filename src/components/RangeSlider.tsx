import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { dataRefernce } from "../data/mockdata"
import {TextField } from '@mui/material';
import {MyTextField} from './myTextField';

import { useFormControl } from '@mui/material/FormControl';

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
  const [value, setValue] = React.useState<number[]>([]);
  

  const [minValue, setMinValue] = React.useState<number>()
  const [maxValue, setMaxValue] = React.useState<number>()

  const { focused } = useFormControl() || {};

  React.useEffect(() => {
    

    dataRefernce.map((item) => {
      if(item.name === SelectedCompany) {
        let priceArray: number[] = []
        item.products.map((product) => {
          priceArray.push(product.price)
        })
        let lowestPrice = Math.min(...priceArray)
        let highestPrice =Math.max(...priceArray)
        setValue([lowestPrice, highestPrice])
        setMinValue(lowestPrice)
        setMaxValue(highestPrice)
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
      <MyTextField value={value} setValue={setValue} minValue={minValue} maxValue={maxValue} defaultValue={minValue} sliderIndex={0}></MyTextField>
      <MyTextField value={value} setValue={setValue} minValue={minValue} maxValue={maxValue} defaultValue={maxValue} sliderIndex={1}></MyTextField>
    </Box>
  );
}