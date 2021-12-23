import React, { useEffect, useState }  from "react";

import Card from '../card/Card';
import {getIndexOfMaxInMultiColumnArray, getDateFromMilliseconds} from "../../base/HelperFunctions"; 

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
      {highestTradingVolume && (
        <Card 
          title='Highest Trading volume:'
          value={highestTradingVolume}
        />
      )}
      {theDayOfHighestTradingVolume && (
        <Card 
          title='The day of highest trading volume:'
          value={theDayOfHighestTradingVolume}
        />
        
        )
      }
    </div>
  )
}

export default TradingVolume;