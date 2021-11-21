import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DateInput = (props) => {
  const [selectedDay, setSelectedDay] = React.useState();

  const handleDayChange = (day) => {
    setSelectedDay(day);
    const dateInSeconds = changeDateMiddayToSecondsMidnightUTC(day);
    props.onDateChange(dateInSeconds);
  }

  // To convert the Date object to UNIX Timestamp at Midnight according to universal time
  const changeDateMiddayToSecondsMidnightUTC = (day) => {
    const dateMiddayInSeconds = parseInt((day.getTime() / 1000).toFixed(0));
    const secondsMidnightUTC = dateMiddayInSeconds - 12 * 3600 - day.getTimezoneOffset() * 60;
    return secondsMidnightUTC;
  }
 
  return (
    <div className='date-input'>
      {selectedDay && <p className='date-input__headline'>Day: {selectedDay.toLocaleDateString()}</p>}
      {!selectedDay && <p className='date-input__headline'>{props.title}</p>}
      <DayPickerInput onDayChange={handleDayChange} />
    </div>
  );
}

export default DateInput;