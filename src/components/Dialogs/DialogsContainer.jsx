import { connect } from 'react-redux';
import {
    sendMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../redux/state/dialogs-reducer';
import store from '../../redux/state/redux-store';

import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//     let addMessage = () => {
//         props.dispatch(sendMessageActionCreator());
//     };

//     let changeMessageText = (text) => {
//         props.dispatch(updateMessageTextActionCreator(text));
//     };

//     return (
//         <Dialogs
//             addMessage={addMessage}
//             changeMessageText={changeMessageText}
//             dialogPage={props.dialogPage}
//         />
//     );
// };

let mapStateToProps = (state) => {
    console.log(state.dialogPage)
    return {
        dialogPage: state.dialogPage,
        // newMessageText: state.dialogPage.newMessageText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator());
        },

        changeMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
