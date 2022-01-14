const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let initialState = {
   
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
    }


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
};
export const sendMessageActionCreator = () =>  ({type: SEND_MESSAGE})

export const updateMessageTextActionCreator = (body) =>  ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer;


