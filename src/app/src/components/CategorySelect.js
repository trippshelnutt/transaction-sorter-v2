import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelect(props) {
  const { category, handleChange } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Category"
        onChange={handleChange}>
        <MenuItem value={'Tripp'}>Allowance - Tripp</MenuItem>
        <MenuItem value={'Missy'}>Allowance - Missy</MenuItem>
        <MenuItem value={'DiningOut'}>Spending - Dining Out</MenuItem>
        <MenuItem value={'Groceries'}>Spending - Groceries</MenuItem>
        <MenuItem value={'Supplies'}>Spending - Supplies</MenuItem>
      </Select>
    </FormControl>
  );
}

CategorySelect.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
