import "./app.css";
import RootLayout from "./rootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formularz from "./contents/formularz";
import WarunkiAdopcji from "./contents/warunkiAdopcji";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="warunkiAdopcji" element={<WarunkiAdopcji />} />
          <Route path="formularz" element={<Formularz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
