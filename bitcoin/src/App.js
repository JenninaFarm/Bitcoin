import logo from './logo.svg';

import DateInput from './components/molecules/date-input/DateInput';
import ShowData from './components/molecules/show-data/ShowData';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DateInput />
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
    </div>
  );
}

export default App;
