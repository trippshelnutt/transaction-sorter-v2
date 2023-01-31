import './App.css';
import Button from '@mui/material/Button';
import TransactionTable from './TransactionTable';
import CategorySelect from './CategorySelect';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Transaction Sorter</p>
        <CategorySelect></CategorySelect>
        <MonthSelect></MonthSelect>
        <YearSelect></YearSelect>
        <Button variant="contained">Fetch</Button>
        <TransactionTable></TransactionTable>
      </header>
    </div>
  );
}

export default App;
