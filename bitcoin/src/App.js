import React, { useEffect, useState } from 'react';

import Header from './components/organisms/header/Header';
import Navigation from './components/base/navigation/Navigation';
import ShowData from './components/molecules/decreased-days-in-row/DecreasedDaysInRow';
import TimeMachine from './components/molecules/time-machine/TimeMachine';
import TradingVolume from './components/molecules/trading-volume/TradingVolume';
import './Styles.scss';
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
        const daysBetween = countDaysBetween(secondsFrom, secondsTo);
        setGranularity(countGranularity(daysBetween));
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${secondsFrom}&to=${secondsTo + 3600}`);
        setData(response.data);
        
        setIsLoading(false);
      }
    } 
    fetchData();
  }, [secondsFrom, secondsTo]);

  useEffect(() => {
    setDataAtMidnight(getDataAtMidnight());
  }, [data]);

  const getDataAtMidnight = () => {
    const midnightData = {prices: [], total_volumes: []};
    const midnightPrices = [];
    const midnightVolumes = [];

    for (let i = 0; i < data.prices.length; i++) {
      const volumes = [];
      const prices = [];
      prices.push(data.prices[i][0]);
      prices.push(data.prices[i][1]);
      volumes.push(data.total_volumes[i][0]);
      volumes.push(data.total_volumes[i][1]);
      midnightVolumes.push(volumes);
      midnightPrices.push(prices);
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

// 1 day from query time = 5 minute interval data
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
    <div className="app">
      <Header onDateChange={handleSecondsChange} />
    
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <ShowData data={dataAtMidnight.prices} />
          <TradingVolume data={dataAtMidnight.total_volumes} />
          <TimeMachine data={dataAtMidnight.prices} />
        </div>
      )}
  <a href="https://www.freepik.com/vectors/background">Background vector created by starline - www.freepik.com</a>
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
