import React, { useEffect, useState } from 'react';

import AskDateRange from './components/molecules/ask-date-range/AskDateRange';
import Navigation from './components/base/navigation/Navigation';
import ShowData from './components/molecules/show-data/ShowData';
import TradingVolume from './components/molecules/trading-volume/TradingVolume';
import './App.scss';
import axios from 'axios';

const App = () => {
  const [secondsFrom, setDateFrom] = useState();
  const [secondsTo, setDateTo] = useState();
  const [data, setData] = useState({prices: [], total_voluems: []});
  const [dataAtMidnight, setDataAtMidnight] = useState({prices: [], total_volumes: []});
  const [granularity, setGranularity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handleSecondsChange = (from = 0, to = 0) => {
    if (from !== 0) {
      setDateFrom(from);
    } else if (to !== 0) {
      setDateTo(to);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (secondsTo !== undefined && secondsFrom !== undefined) {
        setIsLoading(true);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${secondsFrom}&to=${secondsTo + 3600}`);
        setData(response.data);
        console.log(response.data);
        const daysBetween = countDaysBetween(secondsFrom, secondsTo);
        setGranularity(countGranularity(daysBetween));

        setIsLoading(false);
      }
    } 
    fetchData();
  }, [secondsFrom, secondsTo]);

  useEffect(() => {
    setDataAtMidnight(getDataAtMidnight());
  }, [granularity]);

  const getDataAtMidnight = () => {
    const midnightData = {prices: [], total_volumes: []};
    const midnightPrices = [];
    const midnightVolumes = [];

    for (let i = 0; i < data.prices.length; i++) {
      midnightPrices.push(data.prices[i][1]);
      midnightVolumes.push(data.total_volumes[i][1]);
      i += granularity;
    }

    midnightData.prices = midnightPrices;
    midnightData.total_volumes = midnightVolumes;

    return midnightData;
  }


  const countDaysBetween = (from, to) => {
    const diffInMs = (to - from) * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.round(diffInMs / oneDay);
  }

//   1 day from query time = 5 minute interval data
// 1 - 90 days from query time = hourly data
// above 90 days from query time = daily data (00:00 UTC)
  const countGranularity = (dayRange) => {
    if (dayRange === 1) {
      return 24 * 60 / 5 - 1;
    } else if (dayRange > 1 && dayRange <= 90) {
      return 24 - 1;
    } else {
      return 0;
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
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <ShowData data={dataAtMidnight.prices} />
          <TradingVolume data={dataAtMidnight.total_volumes} />
        </div>
      )}

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
