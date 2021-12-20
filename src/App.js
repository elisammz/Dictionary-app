import logo from "./logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            Coded by Elisa Mendoza Zamarripa
          </footer>
        </small>
      </div>
    </div>
  );
}

export default App;
