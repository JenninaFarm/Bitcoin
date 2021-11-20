import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShowData = ({dateFrom, dateTo}) => {
  const [daysPriceHasDecreased, setDaysPriceHasDecreased] = useState();

  useEffect(() => {
    if( dateFrom !== undefined && dateTo !== undefined) {
      fetchData();
    }
  });

  const fetchData = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${dateFrom}&to=${dateTo + 3600}`);
    parseData(response.data);
  }

  const parseData = (data) => {
    // count the day range
    // hox! remember to include the change in granularity
    const daysBetween = countDaysBetween(dateFrom, dateTo);
    const granularity = countGranularity(daysBetween);
    console.log(granularity);
    // get the midnight prices 
    const dayPriceArray = getPricesAtMidnight(data.prices);
    // count the amount of decreasing days
    setDaysPriceHasDecreased(getDaysPriceHasDecreased(dayPriceArray));

    // const highestTraidingVolume = getHighestTradingVolume(data.total_volumes);
    console.log(dayPriceArray);
    console.log(daysPriceHasDecreased);
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

  const getPricesAtMidnight = (prices) => {
    const midnightPrices = [];
    for (let i = 0; i < prices.length; i++) {
      midnightPrices.push(prices[i][1]);
      i += 23;
    }
    return midnightPrices;
  }

  const getDaysPriceHasDecreased = (prices) => {
    const daysDecreasedInRow = [];
    let days = 0;
    for(let i = 1; i < prices.length; i++) {
      if (prices[i-1] > prices[i]) {
        days++;
      } else {
        daysDecreasedInRow.push(days);
        days = 0;
      }
    }
    daysDecreasedInRow.push(days);
    return Math.max(...daysDecreasedInRow);
  }
  

  return (
    <div>

    </div>
  );
};

export default ShowData;