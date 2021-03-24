import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://avatars.githubusercontent.com/u/53896251?s=460&u=4ca2b1f5aa83da6ef43e59f3840edc6f31ff577a&v=4"
                message="WOW this works!"
                timestamp="This is a timestamp"
                username=".__mansayy__."
                image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            />
            <Post 
                profilePic="https://avatars.githubusercontent.com/u/53896251?s=460&u=4ca2b1f5aa83da6ef43e59f3840edc6f31ff577a&v=4"
                message="WOW this works too!"
                timestamp="This is a timestamp"
                username=".__mansayy__."
            />
            <Post />
        </div>
    )
}

export default Feed
