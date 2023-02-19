import React, { useState } from 'react'
import './Chatting.css'
import MessageIcon from '@mui/icons-material/Message';

function Chatting() {
    const [showChatting, setShowChatting] = useState(false);

    const handleChattingOpen = () => {
        setShowChatting(showChatting => !showChatting);
        console.log(showChatting);
    }

    return (
        <div className='chatting'>
            <div className='chatting__icon'>
                <MessageIcon onClick={handleChattingOpen}/>
            </div>

            {showChatting && (
            <div className={`chatting__popup ${showChatting ? "show" : ""}`}>
                {/* ChattingPopup */}
                <h1>Chatting contents</h1>
            </div>
            )}
        </div>
    )
}

export default Chatting
