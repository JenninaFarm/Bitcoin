import React, { useEffect, useState }  from "react";

const TradingVolume = ({data, granularity}) => {
  const [highestTradingVolume, setHighestTradingVolume] = useState();
  const [theDayOfHighestTradingVolume, setTheDayOfHighestTradingVolume] = useState();
  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    setHighestTradingVolume();
    getHighestTradingVolume();
  }

  const getHighestTradingVolume = () => {
    const volumes = data.map((row) => row[1]);
    const index = indexOfMax(volumes);
    if (index !== -1) {
      setHighestTradingVolume(data[index][1]);
      setTheDayOfHighestTradingVolume(data[index][0]);
    }
  }

  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


  return (
    <div>
      {'Highest Trading volume: '}
      {highestTradingVolume}
      <br />
      {'The day of highest trading volume: '}
      {theDayOfHighestTradingVolume}
    </div>
  )
}

export default TradingVolume;