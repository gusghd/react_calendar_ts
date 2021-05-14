import React, { useState } from 'react';
import './Header.scss';
import CalendarDays from '../Calendar/CalendarDays';
import YearPopup from '../YearPopup/YearPopup';

interface HeaderProps {
    month: number;
    year: number;
    moveMonth: (param: boolean) => void;
    moveYear: (param: number) => void;
}

function Header({month, year, moveMonth, moveYear}: HeaderProps) {
    const [isOpened, setPopupToggle] = useState(false);

    const openYearPopup = () => {
        setPopupToggle(!isOpened);
    }

    return (
        <div className="calendar-header-container">
            <div className="calendar-header-content">
                <button onClick={() => moveMonth(false)}>&lt;</button>
                <span onClick={openYearPopup} className="hedaer-info">{year}년 {month}월</span>
                {
                    isOpened &&
                    <YearPopup year={year} moveYear={moveYear} openYearPopup={openYearPopup}/>
                }
                <button onClick={() => moveMonth(true)}>&gt;</button>
            </div>
            <CalendarDays />
        </div>
    )
}

export default Header;