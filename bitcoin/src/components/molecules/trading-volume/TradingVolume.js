import React, { useEffect, useState }  from "react";

const TradingVolume = ({data, granularity}) => {
  const [highestTradingVolume, setHighestTradingVolume] = useState();

  useEffect(() => {
    parseData(data);
  });

  const parseData = (data) => {
    // const dayVolumeArray = countDaysVolumesTogether(data.total_volume);
  }


  return (
    <div>
      {'Highest Trading volume: '}
      {highestTradingVolume}
    </div>
  )
}

export default TradingVolume;