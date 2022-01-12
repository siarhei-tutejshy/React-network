const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
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


