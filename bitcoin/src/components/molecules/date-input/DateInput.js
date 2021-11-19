import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DateInput = (props) => {
  const [selectedDay, setSelectedDay] = React.useState();

  const handleDayChange = (day) => {
    setSelectedDay(day);
    console.log(day);
  }
 
  return (
    <div>
      {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
      {!selectedDay && <p>Choose a day</p>}
      <DayPickerInput onDayChange={handleDayChange} />
    </div>
  );
}

export default DateInput;