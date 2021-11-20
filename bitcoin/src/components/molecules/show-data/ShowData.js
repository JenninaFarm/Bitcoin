import React, {useEffect, useState} from 'react';

const ShowData = ({data, granularity}) => {
  const [daysPriceHasDecreased, setDaysPriceHasDecreased] = useState();

  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    // get the midnight prices 
    const dayPriceArray = getPricesAtMidnight(data.prices);
    // count the amount of decreasing days
    setDaysPriceHasDecreased(getDaysPriceHasDecreased(dayPriceArray));

    // const highestTraidingVolume = getHighestTradingVolume(data.total_volumes);
  }

  const getPricesAtMidnight = (prices) => {
    const midnightPrices = [];
    for (let i = 0; i < prices.length; i++) {
      midnightPrices.push(prices[i][1]);
      i += granularity;
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
      {'Decreased: '}
      {daysPriceHasDecreased}
    </div>
  );
};

export default ShowData;