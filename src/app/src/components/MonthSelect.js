import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MonthSelect(props) {
  const { month, handleChange } = props;

  const monthData = [
    { value: 0, name: 'January' },
    { value: 1, name: 'February' },
    { value: 2, name: 'March' },
    { value: 3, name: 'April' },
    { value: 4, name: 'May' },
    { value: 5, name: 'June' },
    { value: 6, name: 'July' },
    { value: 7, name: 'August' },
    { value: 8, name: 'September' },
    { value: 9, name: 'October' },
    { value: 10, name: 'November' },
    { value: 11, name: 'December' },
  ];

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Month</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={month}
        label="Month"
        onChange={handleChange}>
        {Object.keys(monthData).map((key) => (
          <MenuItem key={key} value={monthData[key].value}>
            {monthData[key].name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MonthSelect.propTypes = {
  month: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};
