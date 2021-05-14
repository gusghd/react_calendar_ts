import React from 'react';

function CalendarDays() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className="calendar-days">
            {days && days.map(day => {
                return <div key={day} className="day-item"><span className={day === 'Sat' ? 'font-sat' : day === 'Sun' ? 'font-sun' : ''}>{day}</span></div>
            })}
        </div>
    )
}

export default CalendarDays;