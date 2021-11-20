import React from 'react';



import AskDateRange from './components/molecules/ask-date-range/AskDateRange';
import Navigation from './components/base/navigation/Navigation';
import ShowData from './components/molecules/show-data/ShowData';
import './App.scss';

const App = () => {
  const [secondsFrom, setDateFrom] = React.useState();
  const [secondsTo, setDateTo] = React.useState();

  const handleSecondsChange = (from = 0, to = 0) => {
    if (from !== 0) {
      setDateFrom(from);
    } else if (to !== 0) {
      setDateTo(to);
    }
  }

  return (
    <div className="App">
      <AskDateRange onDateChange={handleSecondsChange} />
      <Navigation links={[
        {href: 'a', name: 'a option'}, 
        {href: 'b', name: 'b option'}, 
        {href: 'c', name: 'c-option'}
      ]} />
      <ShowData dateFrom={secondsFrom} dateTo={secondsTo} />

      { window.location.pathname === '/a' && 
        <div> { 'content a' } </div>
      }
      { window.location.pathname === '/b' && 
        <div> { 'content b' } </div>
      }
      { window.location.pathname === '/c' && 
        <div> { 'content c' } </div>
      }
    </div>
  );
}

export default App;
