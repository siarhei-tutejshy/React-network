import { connect } from 'react-redux';
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
   console.log(state.auth)
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
        // newMessageText: state.dialogPage.newMessageText,
    };
};
let authRedirect = AuthRedirectContainer(Dialogs)
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirect);

export default DialogsContainer;
