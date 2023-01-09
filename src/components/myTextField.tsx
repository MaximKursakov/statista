import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface Props {
  value: number[],
  setValue: Function,
  minValue:number | undefined,
  maxValue:number | undefined,
  defaultValue: number | undefined,
  sliderIndex: number
}

export const MyTextField:React.FC<Props> = ({value, setValue, minValue, maxValue, defaultValue, sliderIndex}) => {
    function handleValueChange (e : number, index : number) {
      const newValues = [...value];
      newValues[index] = e;
      setValue(newValues);
      }
  return (
      <div className='text-field'> 
      <TextField 
      id="standard-basic" 
      fullWidth
      // label="Price" 
      variant="filled"
      type="number"
      size='small'
      inputProps={{ min: minValue, max: maxValue }}
      defaultValue={defaultValue}
      value={value[sliderIndex]}
      onChange={(e) => handleValueChange(parseInt(e.target.value), sliderIndex)}
      InputProps={{
        startAdornment: <InputAdornment position="start">€</InputAdornment>,
      }}
      />
      </div>
  );
}