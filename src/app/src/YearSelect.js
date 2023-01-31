import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearSelect() {
  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const currentYear = (new Date()).getFullYear();

  const yearData = [
    { value: currentYear, name: `${currentYear}` },
    { value: currentYear - 1, name: `${currentYear - 1}` },
    { value: currentYear - 2, name: `${currentYear - 2}` }
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChange}>
          {yearData.map((data) => (
            <MenuItem value={data.value}>{data.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
