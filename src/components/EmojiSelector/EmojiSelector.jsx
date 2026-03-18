import React from "react"
import { emojisList } from "../../utils/constants"
import './EmojiSelector.css'

function EmojiSelector({activeEmojiId,setActiveEmojiId}) {
    

    return (
        <div className="emoji-selector">
            <h3 className="emoji-title">Select Your Mood</h3>

            <div className="emoji-list">
                {emojisList.map(emoji =>{
                    const isActive = activeEmojiId === emoji.id
                    return(
                        <button
                            className={`emoji-item ${isActive?'active':''}`}
                            key={emoji.id}
                            type="button"
                            onClick={()=> setActiveEmojiId(emoji.id)}
                            aria-pressed ={isActive}
                            >
                            <img
                                src={emoji.emojiUrl}
                                alt={emoji.emojiName}
                                width="40"
                            /> 

                            <p>{emoji.emojiName}</p>
                            </button>
                            
                    )
                })}
            </div>
        </div>
    )
}

export default EmojiSelector