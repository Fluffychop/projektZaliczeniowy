import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header>
        <img src="../images/logo-v2.png" />
        <Navbar />
      </header>
      <div className="content">
        <Home />
      </div>
      <footer>
        <div>
          <h1>Odwiedź nas na</h1>
        </div>
        <div>
          <h1>Kontakt</h1>
          <p>
            Fundacja Królewska ul. Górczewska 200 B/ 202
            <br />
            01-460 Warszawa tel:
            <br />
            514 005 929
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
