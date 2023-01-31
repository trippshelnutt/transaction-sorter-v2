import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AppPicker.css';

const AppPicker = () => {
  let myInput = useRef(null);
  let navigate = useNavigate();

  let goToStore = (event) => {
    event.preventDefault();
    const appId = myInput.current.value;
    navigate(`/transactions/${appId}`);
  };

  return (
    <div className="app-picker">
      <header className="app-picker-header">
        <p>Please Enter an App Id</p>
      </header>
      <form onSubmit={goToStore}>
        <div className="app-picker-app-id">
          <TextField inputRef={myInput} id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained" type="submit">
            Open
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AppPicker;
