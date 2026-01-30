import React from 'react'
import Header from "../../components/Header/Header"
import './Reports.css'
import { useState } from "react"
import { emojisList, monthsList } from "../../utils/constants"
import{
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
function Reports ({dateEmojis}){

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

    


    const getEmojiCount = emojiId => {
        return Object.values(dateEmojis).filter(
            eachEmojiId => eachEmojiId === emojiId
        ).length
    }


    const getMonthlyEmojiCount = emojiId => {
    return Object.entries(dateEmojis).filter(([dateKey, id]) => {
        const [, month] = dateKey.split('-').map(Number)
        return month - 1 === selectedMonth && id === emojiId
    }).length
    }

    const monthlyChartData = emojisList.map(eachEmoji => ({
        name: eachEmoji.emojiName,
        count: getMonthlyEmojiCount(eachEmoji.id),
    }))

    return (
        <div className="reports-page">
            <Header />
            
            <main className="reports-content">
                <h2 className="reports-title">Overall Emoji Report</h2>
                {/*OVERALL EMOJI CARDS */}
                <section className="emoji-summary">
                    {emojisList.map(eachEmoji => (
                        <div className="emoji-card" key={eachEmoji.id}>
                            <p>{eachEmoji.emojiName}</p>
                            <img 
                                src={eachEmoji.emojiUrl}
                                alt={eachEmoji.emojiName}
                                width="40"
                            />
                            
                            <p className="emoji-count">{getEmojiCount(eachEmoji.id)}</p>
                        </div>
                    ))}
                </section> 
                {/*MONTHLY REPORT */}
                <section className="monthly-report">
                    <div className="monthly-header">
                        <select 
                            value={selectedMonth}
                            onChange={e => setSelectedMonth(Number(e.target.value))}
                        >
                        {monthsList.map((month,index) => (
                            <option key={month} value={index}>
                                    {month}
                            </option>
                        ))}
                        </select>
                    </div>
                
                
                    <div className="chart-container">
                        <ResponsiveContainer>
                            <BarChart data={monthlyChartData}>
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="count" fill="#ffbe38" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </section>
            </main>
            
        </div>
    )
}

export default Reports