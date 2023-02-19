import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MonthSelect(props) {
  const { month, handleChange } = props;

  const monthData = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' },
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
