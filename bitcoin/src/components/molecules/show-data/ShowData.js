import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShowData = ({dateFrom, dateTo}) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log(dateFrom);
    console.log(dateTo);
    console.log(data);
    if( dateFrom !== undefined && dateTo !== undefined) {
      fetchData();
    }
  }, [dateTo]);

  const fetchData = () => {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${dateFrom}&to=${dateTo}`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      });
  }

  

  return (
    <div>

    </div>
  );
};

export default ShowData;