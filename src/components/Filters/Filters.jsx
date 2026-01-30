import React from 'react'
import { emojisList, daysList } from "../../utils/constants"
import './Filters.css'
function Filters({
    selectedEmojiFilters,
    setSelectedEmojiFilters,
    selectedDayFilters,
    setSelectedDayFilters,
    getFilteredCount,
}) {

    const toggleEmojiFilter = emojiName => {
        setSelectedEmojiFilters(prev => 
            prev.includes(emojiName)
            ? prev.filter(each => each !== emojiName)
            : [...prev, emojiName]
        )
    }


    const toggleDayFilter = day => {
        setSelectedDayFilters(prev => 
            prev.includes(day)
            ? prev.filter(each => each !== day)
            : [...prev, day]
        )
    }
    return (
        <div className="filters-card">
            <div className="filters-row">
                 <select
                    value={selectedEmojiFilters}
                    onChange={e => setSelectedEmojiFilters(e.target.value)}
                    >
                    {emojisList.map(each => (
                        <option key={each.id} value={each.emojiName}>
                        {each.emojiName}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedDayFilters}
                    onChange={e => setSelectedDayFilters(e.target.value)}
                    >
                    {daysList.map(each => (
                        <option key={each.id} value={each.day}>
                        {each.day}
                        </option>
                    ))}
                </select>
            </div>
            <p className="filters-count">
                {String(getFilteredCount()).padStart(2,'0')}
            </p>
        </div>
    )
}

export default Filters