import React, { useState }  from "react";

const TradingVolume = ({data}) => {
  const [highestTradingVolume, setHighestTradingVolume] = useState();
  return (
    <div>
      {'Highest Trading volume: '}
      {highestTradingVolume}
    </div>
  )
}

export default TradingVolume;