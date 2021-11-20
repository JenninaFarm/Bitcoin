import React, { useEffect, useState } from "react";
import { getDateFromMilliseconds, getIndexOfMaxInMultiColumnArray, getMaxTimesValueHasDecreased, getMinIndex } from "../../base/HelperFunctions";

// the best day for buying bitcoin, and the best day for selling the
// bought bitcoin to maximize profits. If the price only decreases in the date range, your
// output should indicate that one should not buy (nor sell) bitcoin on any of the days
const TimeMachine = ({data}) => {
  const [dateToBuy, setDateToBuy] = useState();
  const [dateToSell, setDateToSell] = useState(); 
  const [buyNorSell, setBuyNorSell] = useState(false);

  useEffect(() => {
    parseData();
  }, [data])

  const parseData = () => {
    const prices = data.map((row) => row[1]);
    if (data.length - 1 === getMaxTimesValueHasDecreased(prices)) {
      setBuyNorSell(true);
    } else if (data.length !== 0) {
      setBuyNorSell(false);
      setDateToBuy(getDateToBuy());
      setDateToSell(getDateToSell());
    }
  }

  const getDateToBuy = () => {
    const minDayIndex = getMinIndex(data.map((row) => row[1]));
    return getDateFromMilliseconds(data[minDayIndex][0]);
  }

  const getDateToSell = () => {
    const maxDayIndex = getIndexOfMaxInMultiColumnArray(data, 1);
    return getDateFromMilliseconds(data[maxDayIndex][0]);
  }

  return (
    <div>
      {'Buy nor sell: ' + buyNorSell}
      <br/>
      {'Date to buy: '}
      {dateToBuy}
      <br/>
      {'Date to sell: '}
      {dateToSell}
    </div>
  )
}

export default TimeMachine;