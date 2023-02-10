import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className='feed'>
          
            <StoryReel />
            <MessageSender />


            <Post
            profilePic="https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-ragnarok/d/dc/Kratos.jpg"
            message="This Works...!"
            username="Ali Ahmed"
            image="https://thumbs.dreamstime.com/b/lauterbrunnen-valley-switzerland-july-village-staubbach-fall-wall-swiss-alps-europe-230899034.jpg"
            
            />
            <Post 
             profilePic="https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-ragnarok/d/dc/Kratos.jpg"
             message="This Works...!"
             username="KratosOlympus"
             image="https://thumbs.dreamstime.com/b/lauterbrunnen-valley-switzerland-july-village-staubbach-fall-wall-swiss-alps-europe-230899034.jpg"
             
            />
            <Post />
    </div>
  )
}

export default Feed