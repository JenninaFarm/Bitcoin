import React from 'react';
import axios from 'axios';

const ShowData = (props) => {
  const [data, setData] = React.useState();

  const fetchData = () => {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      });
  }

  React.useEffect(() => {
    if( data === undefined) {
      fetchData();
    }
  }, [data]);

  return (
    <div>

    </div>
  );
};

export default ShowData;