import React from 'react'
import {useState } from "react";
import { daysList, monthsList } from "../../utils/constants";
import { emojisList } from "../../utils/constants";
import './Calender.css'

function Calender({
    activeEmojiId,
    dateEmojis,
    setDateEmojis,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    selectedEmojiFilter,
    selectedDayFilter,
    

}){

    const today = new Date()

    

    const daysInMonth = new Date(currentYear,currentMonth+1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    

    const getDateKey = date => `${currentYear}-${currentMonth + 1}-${date}`


    const getEmojiImage = emojiId => 
        emojisList.find(eachEmoji => eachEmoji.id === emojiId)


    const handleDateClick = date => {
    if (!activeEmojiId) {
        return
    }

    const dateKey = getDateKey(date)

    setDateEmojis(prev => {
        const existingEmoji = prev[dateKey]

        if (!existingEmoji) {
            return { ...prev, [dateKey]: activeEmojiId }
        }

        if (existingEmoji !== activeEmojiId) {
            return { ...prev, [dateKey]: activeEmojiId }
        }

        const updated = { ...prev }
        delete updated[dateKey]
        return updated
    })
}



    const handlePreviousMonth = () => {
        if(currentMonth === 0){
            setCurrentMonth(11)
            setCurrentYear(prevYear => prevYear - 1)
        }
        else{
            setCurrentMonth(prevMonth => prevMonth - 1)
        }
    }

    const handleNextMonth = () =>{
        if(currentMonth === 11){
            setCurrentMonth(0)
            setCurrentYear(prevYear => prevYear + 1)
        }
        else{
            setCurrentMonth(prevMonth => prevMonth + 1)
        }
    }


    const isDateMatchingFilter = date => {
        const dateKey = `${currentYear}-${currentMonth + 1}-${date}`
        const emojiId = dateEmojis[dateKey]

        if (!emojiId) return false

        const emojiName = emojisList.find(e => e.id === emojiId).emojiName
        const dayIndex = new Date(currentYear, currentMonth, date).getDay()
        const dayName = daysList[dayIndex].day

        return (
            emojiName === selectedEmojiFilter &&
            dayName === selectedDayFilter
        )
    }


    return(
        <div className="calendar">
            {/* Month Navigation */}
            <div className="calendar-header">
                <button 
                    type="button"
                    data-testid= "previous-button"
                    onClick = {handlePreviousMonth}
                    className="nav-btn"
                >
                    &lt;
                </button>

                <h2 className="calendar-title">
                    {monthsList[currentMonth]} {currentYear}
                </h2>

                <button 
                    type="button"
                    data-testid= "next-button"
                    onClick = {handleNextMonth}
                    className="nav-btn"
                >
                    &gt;
                </button>
            </div>
            {/* Days Header */}
            <div className="calendar-days">
                {daysList.map(eachday => (
                    <p key={eachday.id} className="day-label">{eachday.day}</p>
                ))}
            </div>

            {/*Dates Grid*/}
            <div className="calendar-dates">
                {/*empty slots before first day */}
                {Array.from({length:firstDayOfMonth}).map((_,index) => (
                    <span key={`empty-${index}`}/>
                ))}

                {/* Dates */}
                {Array.from({length:daysInMonth}).map((_,index)=>{
                    const date = index+1 
                    const dateKey = getDateKey(date)
                    const emojiId = dateEmojis[dateKey]
                    const isMatching = isDateMatchingFilter(date)
                    return (
                        <button className={`date-cell ${emojiId && !isMatching?'dimmed':''}`} key={date} onClick={()=>handleDateClick(date)}>
                            {emojiId ? (() => {
                            const emoji = getEmojiImage(emojiId)

                            if (!emoji) {
                                return date
                            }

                            return (
                                <img
                                src={emoji.emojiUrl}
                                alt={emoji.emojiName}
                                width="30"
                                />
                            )
                            })() : (
                            date
                            )}

                        </button>
                    )
                })}
            </div>

            
        </div>
    )
}

export default Calender