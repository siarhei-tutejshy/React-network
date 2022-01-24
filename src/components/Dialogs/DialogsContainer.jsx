import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirectContainer } from '../../hoc/AuthRedirect';
import {
    sendMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../redux/state/dialogs-reducer';


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
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
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



export default compose(connect(mapStateToProps, mapDispatchToProps),AuthRedirectContainer)(Dialogs)
