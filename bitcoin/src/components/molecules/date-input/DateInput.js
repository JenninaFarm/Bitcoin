import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DateInput = (props) => {

  const handleDayChange = (day) => {
    if(day !== undefined) {
      const dateInSeconds = changeDateMiddayToSecondsMidnightUTC(day);
      props.onDateChange(dateInSeconds);
    }
  }

  // To convert the Date object to UNIX Timestamp at Midnight according to universal time
  const changeDateMiddayToSecondsMidnightUTC = (day) => {
    const dateMiddayInSeconds = parseInt((day.getTime() / 1000).toFixed(0));
    const secondsMidnightUTC = dateMiddayInSeconds - 12 * 3600 - day.getTimezoneOffset() * 60;
    return secondsMidnightUTC;
  }
 
  return (
    <div className='date-input'>
      <p className='date-input__headline'>{props.title}</p>
      <DayPickerInput 
        placeholder='Add dates'
        dayPickerProps={{
          disabledDays: { after: new Date() },
        }}
        onDayChange={handleDayChange} />
    </div>
  );
}

export default DateInput;