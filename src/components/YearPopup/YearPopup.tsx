import React, { useState } from 'react';
import { useEffect } from 'react';
import './YearPopup.scss';

interface YearPopupProps {
    year: number;
    moveYear: (param: number) => void;
    openYearPopup: () => void;
}

function YearPopup({year, moveYear, openYearPopup}: YearPopupProps) {
    const [years, setYears] = useState<number[]>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        renderYears(year);
    }, [])

    useEffect(() => {
        renderYears(year + (page * 15));
    }, [page])

    const renderYears = (year: number): void => {
        const tempArray = [];
        if (year) {
            for(let i = 7; i >= 0; i--) {
                tempArray.push(year - i)
            }
            for(let i = 1; i <= 7; i++) {
                tempArray.push(year + i)
            }
        }
        setYears(tempArray);
    }

    const clickYear = (year: number) => {
        moveYear(year);
        openYearPopup();
    }

    return (
        <div className='year-popup'>
            <div className='move-year-btn'><button onClick={() => setPage(page - 1)}>&lt;</button></div>
            <div className='year-list-container'>
                {
                    years.length > 0 &&
                    years.map((item) => {
                        return <div onClick={e => clickYear(item)} key={item} className={`year-item ${item === year ? 'selected' : ''}`}><span>{item}</span></div>
                    })
                }
            </div>
            <div className='move-year-btn'><button onClick={() => setPage(page + 1)}>&gt;</button></div>
        </div>
    )
}

export default YearPopup;