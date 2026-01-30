import React from 'react'
import { emojisList } from "../../utils/constants"
import './EmojiSelector'
import './EmojiSelector.css'
function EmojiSelector({activeEmojiId,setActiveEmojiId}) {
    

    return (
        <div className="emoji-selector">
            <h3 className="emoji-title">Select Your Mood</h3>

            <div className="emoji-list">
                {emojisList.map(eachemoji =>{
                    const isActive = activeEmojiId === eachemoji.id
                    return(
                        <button
                            className={`emoji-item ${isActive?'active':''}`}
                            key={eachemoji.id}
                            type="button"
                            onClick={()=> setActiveEmojiId(eachemoji.id)}
                            style={{
                                border:isActive? '2px solid #ffbe38':'1px solid #ccc',
                            }}
                            >
                            <img
                                src={eachemoji.emojiUrl}
                                alt={eachemoji.emojiName}
                                width="40"
                            /> 

                            <p>{eachemoji.emojiName}</p>
                            </button>
                            
                    )
                })}
            </div>
        </div>
    )
}

export default EmojiSelector