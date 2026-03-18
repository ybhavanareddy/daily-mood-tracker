import { daysList, emojisList } from "./constants"

export const getFilteredCount = (
  dateEmojis,
  currentMonth,
  currentYear,
  selectedEmoji,
  selectedDay
) => {
  return Object.entries(dateEmojis).filter(([dateKey, emojiId]) => {
    const [year, month, date] = dateKey.split('-').map(Number)

    if (month - 1 !== currentMonth || year !== currentYear) {
      return false
    }

    const dayIndex = new Date(year, month - 1, date).getDay()
    const dayName = daysList[dayIndex].day

    const emojiObj = emojisList.find(e => e.id === emojiId)
    if (!emojiObj) return false

    const emojiName = emojiObj.emojiName

    return (
      (selectedEmoji === '' || emojiName === selectedEmoji) &&
      (selectedDay === '' || dayName === selectedDay)
    )
  }).length
}