import React, {useEffect} from 'react';
import axios from 'axios';

const ShowData = ({dateFrom, dateTo}) => {

  useEffect(() => {
    if( dateFrom !== undefined && dateTo !== undefined) {
      fetchData();
    }
  });

  const fetchData = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${dateFrom}&to=${dateTo + 3600}`);
    parseData(response.data);
  }

  const parseData = (data) => {
    console.log(data.prices[0][1]);
  }

  

  return (
    <div>

    </div>
  );
};

export default ShowData;