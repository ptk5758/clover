import React from 'react';
import logo from './logo.svg';
import "./css/clover.css"
import Header from './component/header';
import Calendar from './component/calendar';
function Main() {
  return (
    <div className="clover">
      <Header/>
      <Calendar/>
    </div>
  );
}

export default Main;
