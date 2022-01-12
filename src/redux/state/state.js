import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

 

let store = {
    _state: {
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
    },

    getState() {
        return this._state;
    },
    _callSubscriber(){
        console.log('subscribe')
    },

    subscribe(observer) {
        this._callSubscriber = observer

    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state);

    }

}


 




export default store;
window.store = store;
