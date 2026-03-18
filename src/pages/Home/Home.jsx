import React from 'react'
import { useState } from "react"
import Header from "../../components/Header/Header"
import Calender from "../../components/Calender/Calender"
import EmojiSelector from "../../components/EmojiSelector/EmojiSelector"
import Filters from "../../components/Filters/Filters"

import { getFilteredCount } from '../../utils/filterUtil'
import './Home.css'

function Home({dateEmojis,setDateEmojis}){


    const [activeEmojiId, setActiveEmojiId] = useState(1)

    const[selectedEmoji, setSelectedEmoji] = useState('')
    const[selectedDay, setSelectedDay] = useState('')

    
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    



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
                        selectedEmoji={selectedEmoji}
                        selectedDay={selectedDay}
                    />
                </section>
                
                <section className="home-right">
                    <EmojiSelector 
                        activeEmojiId={activeEmojiId}
                        setActiveEmojiId={setActiveEmojiId}
                    />
                    <Filters
                        selectedEmoji={selectedEmoji}
                        setSelectedEmoji={setSelectedEmoji}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        getFilteredCount={()=> 
                            getFilteredCount(
                                dateEmojis,
                                currentMonth,
                                currentYear,
                                selectedEmoji,
                                selectedDay
                            )
                        }
                    />
                    

                </section>
                

            </main>
        </div>
        
    )
}

export default Home