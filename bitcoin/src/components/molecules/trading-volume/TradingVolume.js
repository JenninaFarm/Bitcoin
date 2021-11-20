import React, { useEffect, useState }  from "react";

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
      {'Highest Trading volume: '}
      {highestTradingVolume}
      <br />
      {'The day of highest trading volume: '}
      {theDayOfHighestTradingVolume && (
        <div>
          {theDayOfHighestTradingVolume}
        </div>
        )
      }
    </div>
  )
}

export default TradingVolume;