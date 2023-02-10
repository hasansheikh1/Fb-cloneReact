import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from "@mui/material";
import { Videocam } from '@mui/icons-material';
import { PhotoLibrary } from '@mui/icons-material';
import { InsertEmoticon } from '@mui/icons-material';

function MessageSender() {
  
    const [input, setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    
    const handleSubmit=(e)=>{
    e.preventDefault();
    
    //Db Code
    setInput("");
    setImageUrl("");
  
}

    return (
    
    <div className='messageSender'>

        <div className='messageSender__top'>
            <Avatar />
            <form>
                <input value={input} 
                onChange={(e) => setInput(e.target.value)}
                className='messageSender__input' type="text" placeholder="What's in your mind..?" />
                
                <input placeholder='image URL (Optional)'
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
                />
                
                <button onClick={handleSubmit} type="submit">
                Hidden Submit
                </button>
            </form>
        </div>
        
        <div className='messageSender__bottom'>
            
            <div className="messageSender__option">
                 <Videocam style={{color:"red"}} />
                 <h3>Live video</h3>
            </div>
            
            <div className="messageSender__option">
                <PhotoLibrary style={{color:"green"}} />
                <h3>Photo/Video</h3>
                </div>
            
            <div className="messageSender__option">
                <InsertEmoticon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
                </div>
        </div>


    </div>
  )
}

export default MessageSender;