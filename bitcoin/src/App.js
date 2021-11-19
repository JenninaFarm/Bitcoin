import React from 'react';

import logo from './logo.svg';


import AskDateRange from './components/molecules/ask-date-range/AskDateRange';
import Navigation from './components/base/navigation/Navigation';
// import ShowData from './components/molecules/show-data/ShowData';
import './App.scss';

const App = () => {
  const [secondsFrom, setDateFrom] = React.useState();
  const [secondsTo, setDateTo] = React.useState();

  const handleSecondsChange = (from = 0, to = 0) => {
    if (from !== 0) {
      setDateFrom(from);
      console.log(secondsFrom);
    } else if (to !== 0) {
      setDateTo(to);
    }
  }

  return (
    <div className="App">
      <AskDateRange onDateChange={handleSecondsChange} />
      <Navigation links={['a option', 'b option', 'c-option']} />
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
    </div>
  );
}

export default App;
