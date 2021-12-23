import React, { useEffect, useState }  from "react";

import Card from '../card/Card';
import {getIndexOfMaxInMultiColumnArray, getDateFromMilliseconds} from "../../base/HelperFunctions"; 
import diagram from '../../../images/diagram.jpg';

const TradingVolume = ({data}) => {
  const [highestTradingVolume, setHighestTradingVolume] = useState();
  const [theDayOfHighestTradingVolume, setTheDayOfHighestTradingVolume] = useState();
  
  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    getHighestTradingVolume();
  }

  const getHighestTradingVolume = () => {
    const index = getIndexOfMaxInMultiColumnArray(data, 1);
    if (index !== -1) {
      setHighestTradingVolume(data[index][1]);
      const date = getDateFromMilliseconds(data[index][0]);
      setTheDayOfHighestTradingVolume(date);
    }
  }

  return (
    <div>
      {(highestTradingVolume || theDayOfHighestTradingVolume) && (
        <Card 
          title='Highest Trading volume:'
          value={highestTradingVolume}
          title2='The day of highest trading volume:'
          value2={theDayOfHighestTradingVolume}
          image_src={diagram}
          image_alt=""
        />
      )}
     
    </div>
  )
}

export default TradingVolume;