import logo from "./assets/logo.svg";
import "./App.scss";
import UseStateMistake from "./Mistakes/useStateMistake";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>You Don't Know React</h2>
      </header>
      <div>
        <UseStateMistake />
      </div>
    </div>
  );
}

export default App;
