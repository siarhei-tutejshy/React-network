import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/state/dialogs-reducer";
import store from "../../redux/state/redux-store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = store.getState()
    

    

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };
    

    let changeMessageText = (text) => {
        props.dispatch(
            updateMessageTextActionCreator(text)
        );
    };
    

    return (
        <Dialogs addMessage={addMessage} changeMessageText={changeMessageText} dialogPage={state.dialogPage}/>
    );
};

export default DialogsContainer;