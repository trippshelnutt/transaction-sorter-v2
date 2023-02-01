import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import TransactionTable from './TransactionTable';
import CategorySelect from './CategorySelect';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import sampleData from '../sampleData.json';

export default function App() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [rows, setRows] = React.useState([]);
  const [category, setCategory] = React.useState('Tripp');
  const [month, setMonth] = React.useState(currentMonth);
  const [year, setYear] = React.useState(currentYear);

  const handleFetchClicked = () => {
    setRows([]);

    // TODO: call API to get transactions
    // /api/transactions/{category}/{year}/{month}
    console.log(`Calling /api/transactions/${category}/${year}/${month}`);

    setRows(sampleData);
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
    </div>
  );
}
