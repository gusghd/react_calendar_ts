import React from 'react';

interface DateItemProps {
    date: number;
    day: string;
    isThisMonth: boolean;
}

function DateItem({date, day, isThisMonth}: DateItemProps) {

    return (
        <div className={`date-item ${isThisMonth ? '' : 'other-month'}`}>
            <span className={day === 'Sat' ? 'font-sat' : day === 'Sun' ? 'font-sun' : ''}>{date > 0 ? date : ''}</span>
        </div>
    )
}

export default DateItem;