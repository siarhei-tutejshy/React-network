import { rerenderEntireTree } from '../../render';

let state = {
    dialogPage: {
        dialogsMemb: [
            { name: 'Andrew', id: 1 },
            { name: 'Mari', id: 2 },
            { name: 'Mark', id: 3 },
            { name: 'Tom', id: 14 },
            { name: 'Ivan Danko', id: 5 },
        ],

        messages: [
            { message: 'Hi', id: 1 },
            { message: 'How are you', id: 2 },
            { message: 'How s your thing', id: 3 },
            { message: 'fine', id: 4 },
        ],
        newMessageText: 'new message',
    },

    profilePage: {
        posts: [
            { post: 'Hi', id: 1, likes: 11 },
            { post: 'How are you', id: 2, likes: 12 },
            { post: 'How s your thing', id: 3, likes: 5 },
        ],
        newPostText: 'new post',
    },
};

export let addPost = (e) => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export let updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogPage.newMessageText,
    };

    state.dialogPage.messages.push(newMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
    state.dialogPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export default state;
