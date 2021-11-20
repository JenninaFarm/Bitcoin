import React, { useEffect, useState } from "react";

// the best day for buying bitcoin, and the best day for selling the
// bought bitcoin to maximize profits. If the price only decreases in the date range, your
// output should indicate that one should not buy (nor sell) bitcoin on any of the days
const TimeMachine = ({data}) => {
  const [dateToBuy, setDateToBuy] = useState();
  const [dateToSell, setDateToSell] = useState(); 

  useEffect(() => {
    parseData();
  })

  const parseData = () => {
    
  }

  return (
    <div>

    </div>
  )
}

export default TimeMachine;