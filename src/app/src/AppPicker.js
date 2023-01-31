import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AppPicker = () => {
  let myInput = useRef(null);
  let navigate = useNavigate();

  let goToStore = (event) => {
    event.preventDefault();
    const appId = myInput.current.value;
    navigate(`/transactions/${appId}`);
  };

  return (
    <form onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <TextField inputRef={myInput} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" type="submit">
        Open
      </Button>
    </form>
  );
};

export default AppPicker;
