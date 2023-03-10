import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearSelect(props) {
  const { year, handleChange } = props

  const currentYear = (new Date()).getFullYear();

  const yearData = [
    { value: currentYear, name: `${currentYear}` },
    { value: currentYear - 1, name: `${currentYear - 1}` },
    { value: currentYear - 2, name: `${currentYear - 2}` }
  ];

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChange}>
          {Object.keys(yearData).map((key) => (
            <MenuItem key={key} value={yearData[key].value}>{yearData[key].name}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

YearSelect.propTypes = {
  year: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};
