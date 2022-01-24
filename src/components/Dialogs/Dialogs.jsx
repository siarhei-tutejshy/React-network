import { NavLink } from 'react-router-dom';
import cl from './Dialogs.module.css';
import React from 'react';
import {
    sendMessageActionCreator,
    updateMessageTextActionCreator,
} from '../../redux/state/dialogs-reducer';

const Dialog = (props) => {
    return (
        <div className={cl.user}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={cl.message}>
            <p>{props.message}</p>
        </div>
    );
};

const Dialogs = (props) => {
   
console.log(props,'dialprops')
    const dialogComp = props.dialogPage.dialogsMemb.map((dialog) => (
        <Dialog name={dialog.name} id={dialog.id} />
        
    ));
    const showMessage = props.dialogPage.messages.map((mes) => (
        <Message message={mes.message} id={mes.id} />
    ));
    let newMessageText = props.dialogPage.newMessageText
    

    let addMessage = () => {
        console.log('added')
        props.addMessage();
    };

    let changeMessageText = (event) => {
        
        props.changeMessageText(event.target.value);
    };
    
    return (
        <div className={cl.dialogs}>
            <div className={cl.users__list}>{dialogComp}</div>
            <div className={cl.messages}>
                {showMessage}
                <div>
                    <textarea
                       
                        onChange={changeMessageText}
                        value={newMessageText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add posts</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
