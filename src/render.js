import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    addMessage,
    addPost,
    updateNewMessageText,
    updateNewPostText,
} from './redux/state/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPost={updateNewPostText}
                addMessage={addMessage}
                updateNewMessage={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
