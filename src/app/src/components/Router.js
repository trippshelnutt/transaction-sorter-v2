import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AppPicker from './AppPicker';
import App from './App';
import NotFound from './NotFound';

export default function Router() {
  let navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppPicker navigate={navigate} />} />
        <Route path="/transactions/:appId" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
