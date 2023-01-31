import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppPicker from "./AppPicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<AppPicker/>} />
      <Route path="/transactions/:appId" element={<App/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
