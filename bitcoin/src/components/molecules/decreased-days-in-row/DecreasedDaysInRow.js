import React, {useEffect, useState} from 'react';
import { getMaxTimesValueHasDecreased } from '../../base/HelperFunctions';

const DecreasedDaysInRow = ({data}) => {
  const [daysPriceHasDecreased, setDaysPriceHasDecreased] = useState();

  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    const prices = data.map((row) => row[1]);
    if (prices.length !== 0) {
      setDaysPriceHasDecreased(getMaxTimesValueHasDecreased(prices));
    }
  }

  return (
    <div className='decreased-days'>
      {daysPriceHasDecreased && (
        <div>
          <p>Maximum amount of days the price has decreased in a row:</p>
          <p>{daysPriceHasDecreased}</p>
        </div>
        )
      }
    </div>
  );
};

export default DecreasedDaysInRow;