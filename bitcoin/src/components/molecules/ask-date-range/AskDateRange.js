import React from 'react';

import DateInput from '../date-input/DateInput';

const AskDateRange = (props) => {

  const handleDateFromChange = (newDate) => {
    props.onDateChange(newDate);
  }
  
  const handleDateToChange = (newDate) => {
    props.onDateChange(0, newDate);
  }

  return (
    <div className='ask-date-range'>
      <DateInput className='ask-date-range__from-date' onDateChange={handleDateFromChange} />
      <DateInput className='ask-date-range__to-date' onDateChange={handleDateToChange} />
    </div>
  );
}

export default AskDateRange;