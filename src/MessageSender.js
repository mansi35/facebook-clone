import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useAuth} from './AuthContext';
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const {currentUser} = useAuth();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: currentUser.photoURL,
            username: currentUser.displayName,
            image: imageURL,
        });

        setInput("");
        setImageURL("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={currentUser.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" placeholder={`What's on your mind `+ currentUser.displayName + `?`} />
                    <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder={`image URL (Optional)`} />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
