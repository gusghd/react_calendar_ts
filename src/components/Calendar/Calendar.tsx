import React, { useState } from 'react';
import { useEffect } from 'react';
import DateItem from './DateItem';
import './Calendar.scss';

interface CalendarProps {
    month: number;
    year: number;
}

export interface DateItemType {
    id: string;
    date: number;
    day: string;
    isThisMonth: boolean;
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Calendar({month, year}:CalendarProps) {
    const [dates, setDates] = useState<DateItemType[]>();

    useEffect(() => {
        if (month && year) {
            const lastMonthLastDate = new Date(year, month - 1, 0).getDate();
            const lastDate = new Date(year, month, 0).getDate();
            
            let day = new Date(year, month - 1, 1).getDay();

            const tempDates = [];

            // 이전 달 날짜 데이터
            for(let i = day - 1; i >= 0; i--) {
                tempDates.push({
                    id: year + (month-1).toString() + i,
                    date: lastMonthLastDate - i,
                    day: days[new Date(year, month - 2, lastMonthLastDate - i).getDay()],
                    isThisMonth: false
                });
            }

            // 해당 달 날짜 데이터
            for (let i = 1; i <= lastDate; i++) {
                tempDates.push({
                    id: year + month.toString() + i,
                    date: i,
                    day: days[day % 7],
                    isThisMonth: true
                });
                day++;
            }

            // 다음 달 날짜 데이터
            for(let i = 1; i <= 7 - (day % 7); i++) {
                tempDates.push({
                    id: year + (month+1).toString() + i,
                    date: i,
                    day: days[new Date(year, month, i).getDay()],
                    isThisMonth: false
                });
            }

            setDates(tempDates);
        }
    }, [month, year]);


    return (
        <div className='calendar-container'>
            {
                dates &&   
                dates.map((item) => {
                    return <DateItem key={item.id} date={item.date} day={item.day} isThisMonth={item.isThisMonth}/>
                })
            }
        </div>
    )
}

export default Calendar;