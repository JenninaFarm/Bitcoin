import React from "react";
import logo from "../../../images/logo.jpg";

import AskDateRange from '../../molecules/ask-date-range/AskDateRange';


const Header = ({onDateChange}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} />
          <h1 className="header__title">BitApp</h1>
        </div>
        <h3 className="header__subtitle">Please choose a date range:</h3>
      </div>
      
      <AskDateRange onDateChange={onDateChange} />
    </header>
  );
}

export default Header;