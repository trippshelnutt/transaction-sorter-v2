import './App.css';
import Button from '@mui/material/Button';
import TransactionTable from './TransactionTable';
import CategorySelect from './CategorySelect';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>Transaction Sorter</p>
      </header>
      <section>
        <div className="app-selection">
          <CategorySelect />
          <MonthSelect />
          <YearSelect />
          <Button variant="contained">Fetch</Button>
        </div>
        <TransactionTable />
      </section>
    </div>
  );
}

export default App;
