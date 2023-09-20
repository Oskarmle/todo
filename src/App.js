import logo from "./logo.svg";
import "./App.css";
import "./box.css";
import Box from "./components/Box";

function App() {
  // Vi laver et array
  const data = [
    { message: "hejsa", color: "orange" },
    { message: "hej", color: "magenta" },
    { message: "hvem der", color: "green" },
    { message: "hvorfor har jeg ikke UX", color: "lightgreen" },
    { message: "Græder", color: "lightblue" },
    { message: "farvel...", color: "aqua" },
    { message: "starter i netto igen", color: "pink" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {data.map((x) => {
        return <Box message={x.message} color={x.color} />;
      })}
    </div>
  );
}

export default App;
