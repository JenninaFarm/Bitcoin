import React, {useEffect, useState} from 'react';
import { getMaxTimesValueHasDecreased } from '../../base/HelperFunctions';
import Card from '../card/Card';
import diagram from '../../../images/render-design.jpg';

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
        <Card 
          image_src={diagram}
          image_alt=""
          title="Maximum amount of days the price has decreased in a row:"
          value={daysPriceHasDecreased}
        />
        )
      }
    </div>
  );
};

export default DecreasedDaysInRow;