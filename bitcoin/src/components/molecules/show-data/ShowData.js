import React, {useEffect, useState} from 'react';
import { getMaxTimesValueHasDecreased } from '../../base/HelperFunctions';

const ShowData = ({data}) => {
  const [daysPriceHasDecreased, setDaysPriceHasDecreased] = useState();

  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    const prices = data.map((row) => row[1]);
    setDaysPriceHasDecreased(getMaxTimesValueHasDecreased(prices));
  }

  return (
    <div>
      {'Decreased: '}
      {daysPriceHasDecreased}
    </div>
  );
};

export default ShowData;