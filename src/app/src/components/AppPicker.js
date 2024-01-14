import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AppPicker.css';

export default function AppPicker(props) {
  let navigate = useNavigate();
  let myInput = useRef(null);

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
          <TextField inputRef={myInput} id="outlined-basic" label="App Id" variant="outlined" />
          <Button variant="contained" type="submit">
            Open
          </Button>
        </div>
      </form>
    </div>
  );
}
