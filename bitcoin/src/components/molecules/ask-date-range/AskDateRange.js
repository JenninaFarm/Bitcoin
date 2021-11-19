import React from 'react';

import DateInput from '../date-input/DateInput';

const AskDateRange = (props) => {
  return (
    <div className='ask-date-range'>
      <DateInput />
      <DateInput />
    </div>
  );
}

export default AskDateRange;