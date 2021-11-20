import React, {useEffect, useState} from 'react';

const ShowData = ({data}) => {
  const [daysPriceHasDecreased, setDaysPriceHasDecreased] = useState();

  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    // count the amount of decreasing days
    setDaysPriceHasDecreased(getDaysPriceHasDecreased(data));
  }

  const getDaysPriceHasDecreased = (prices) => {
    const daysDecreasedInRow = [];
    let days = 0;
    for(let i = 1; i < prices.length; i++) {
      if (prices[i-1] > prices[i][1]) {
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