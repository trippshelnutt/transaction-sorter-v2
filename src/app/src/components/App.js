import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppPicker from './AppPicker';
import Transactions from './Transactions';
import NotFound from './NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppPicker />} />
        <Route path="/transactions/:appId" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
