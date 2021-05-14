import React from 'react';
import { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header'

function App() {
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [year, setYear] = useState(new Date().getFullYear());

  const moveMonth = (isAddMonth: boolean) => {
    let movedMonth = isAddMonth ? month + 1 : month - 1;
    if (movedMonth > 12) {
      movedMonth = 1;
      setYear(year + 1);
    } else if (movedMonth < 1) {
      movedMonth = 12;
      setYear(year - 1);
    }
    setMonth(movedMonth);
  }

  const moveYear = (changeYear: number) => {
    setYear(changeYear);
  }

  return (
    <div className="App">
      <Header month={month} year={year} moveMonth={moveMonth} moveYear={moveYear} />
      <Calendar month={month} year={year}/>
    </div>
  );
}

export default App;
