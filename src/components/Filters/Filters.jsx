import React from 'react'
import { emojisList, daysList } from "../../utils/constants"
import './Filters.css'
function Filters({
    selectedEmoji,
    setSelectedEmoji,
    selectedDay,
    setSelectedDay,
    getFilteredCount,
}) {

    const count = getFilteredCount();

    return (
        <div className="filters-card">
            <div className="filters-row">
                {/* Emoji Filter */}
                <div className='filter-group'>
                    <label>Mood</label>
                    <select
                    value={selectedEmoji}
                    onChange={e => setSelectedEmoji(e.target.value)}
                    >
                    <option value="">Show All</option>
                    {emojisList.map(each => (
                        <option key={each.id} value={each.emojiName}>
                        {each.emojiName}
                        </option>
                    ))}
                </select>
                </div>
                 {/* Day Filter*/ }
                <div className='filter-group'>
                <label>Day</label>
                <select
                    value={selectedDay}
                    onChange={e => setSelectedDay(e.target.value)}
                    >
                    <option value="">Show All</option>
                    {daysList.map(each => (
                        <option key={each.id} value={each.day}>
                        {each.day}
                        </option>
                    ))}
                </select>
                </div>
                
            </div>
            <p className="filters-count">
                {count === 0 ? 'No data found' : String(count).padStart(2,'0')}
            </p>
        </div>
    )
}

export default Filters