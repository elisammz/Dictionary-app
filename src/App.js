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
          <Dictionary defaultKeyWord="sunset" />
        </main>
        <small>
          <footer className="App-footer">
            <a
              href="https://github.com/elisammz/Dictionary-app"
              target="blank"
              alternative="Dictionary-app repo in GitHub"
            >
              {" "}
              Open-sourced{" "}
            </a>
            code by Elisa Mendoza Zamarripa 👩🏽‍💻
          </footer>
        </small>
      </div>
    </div>
  );
}

export default App;
