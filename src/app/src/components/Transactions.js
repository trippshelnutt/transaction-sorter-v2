import './Transactions.css';
import React from 'react';
import Button from '@mui/material/Button';
import TransactionTable from './TransactionTable';
import CategorySelect from './CategorySelect';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import settings from '../settings.json';
import { useAuth0 } from '@auth0/auth0-react';

export default function App() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const { logout, user } = useAuth0();

  const [rows, setRows] = React.useState([]);
  const [category, setCategory] = React.useState('Tripp');
  const [month, setMonth] = React.useState(currentMonth);
  const [year, setYear] = React.useState(currentYear);

  const handleFetchClicked = async () => {
    const apiUrl = new URL(`/Prod/api/transactions/${category}/${year}/${month}`, settings.apiSite);
    const response = await fetch(apiUrl.href);
    const data = await response.json();

    setRows(data);
  };

  const handleClearClicked = () => {
    setRows([]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <p>Transaction Sorter</p>
      </header>
      <section className="app-section">
        <div className="app-selection">
          <CategorySelect category={category} handleChange={handleCategoryChange} />
          <MonthSelect month={month} handleChange={handleMonthChange} />
          <YearSelect year={year} handleChange={handleYearChange} />
          <Button variant="contained" onClick={handleFetchClicked}>
            Fetch
          </Button>
          <Button variant="contained" onClick={handleClearClicked}>
            Clear
          </Button>
        </div>
        <TransactionTable rows={rows} />
      </section>
      <div className="logout-section">
        <Button 
          variant="outlined" 
          onClick={() => logout({ returnTo: window.location.origin })}
          style={{ marginTop: '20px' }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
