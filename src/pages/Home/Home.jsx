import React from 'react'
import { useState } from "react"
import Header from "../../components/Header/Header"
import Calender from "../../components/Calender/Calender"
import EmojiSelector from "../../components/EmojiSelector/EmojiSelector"
import Filters from "../../components/Filters/Filters"
import { daysList, emojisList } from "../../utils/constants"

import './Home.css'
function Home({dateEmojis,setDateEmojis}){


    const [activeEmojiId, setActiveEmojiId] = useState(1)

    const[selectedEmojiFilters, setSelectedEmojiFilters] = useState('Very Happy')
    const[selectedDayFilters, setSelectedDayFilters] = useState('Sun')

    
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const getFilteredCount = () => {
        return Object.entries(dateEmojis).filter(([dateKey,emojiId]) => {
            const[year,month,date] = dateKey.split('-').map(Number)

            if(month - 1 !== currentMonth || year !== currentYear){
                return false
            }

            const dayIndex = new Date(year, month - 1, date).getDay()
            const dayName = daysList[dayIndex].day

            const emojiObj = emojisList.find(e => e.id === emojiId)
            if (!emojiObj) return false

            const emojiName = emojiObj.emojiName

            return(
                emojiName === selectedEmojiFilters &&
                dayName === selectedDayFilters

            )
        }).length
    }




    return (
        <div className="home-page">
            <Header />
            <h2>Moods in a Month</h2>
            <main className="home-content">
                
                <section className="home-left">
                    <Calender
                        activeEmojiId={activeEmojiId}
                        dateEmojis={dateEmojis}
                        setDateEmojis={setDateEmojis}
                        currentMonth={currentMonth}
                        setCurrentMonth={setCurrentMonth}
                        currentYear={currentYear}
                        setCurrentYear={setCurrentYear}
                        selectedEmojiFilters={selectedEmojiFilters}
                        selectedDayFilters={selectedDayFilters}
                    />
                </section>
                
                <section className="home-right">
                    <EmojiSelector 
                        activeEmojiId={activeEmojiId}
                        setActiveEmojiId={setActiveEmojiId}
                    />
                    <Filters
                        selectedEmojiFilters={selectedEmojiFilters}
                        setSelectedEmojiFilters={setSelectedEmojiFilters}
                        selectedDayFilters={selectedDayFilters}
                        setSelectedDayFilters={setSelectedDayFilters}
                        getFilteredCount={getFilteredCount}
                    />
                    

                </section>
                

            </main>
        </div>
        
    )
}

export default Home