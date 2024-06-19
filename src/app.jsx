import "./app.css";
import RootLayout from "./rootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formularz from "./contents/formularz";
import WarunkiAdopcji from "./contents/warunkiAdopcji";
import Login from "./contents/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="warunkiAdopcji" element={<WarunkiAdopcji />} />
          <Route path="formularz" element={<Formularz />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
