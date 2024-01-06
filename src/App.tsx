import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import "./css/clover.css"
import Header from './component/header';
import Calendar from './component/calendar';
function Main() {

  const [date, setDate] = useState<Date>(new Date())

  return (
    <div className="clover">
      <Header year={date.getFullYear().toString()}/>
      <Calendar
        date={date}
      />
    </div>
  );
}

export default Main;
