import { NavLink } from 'react-router-dom';
import cl from './Dialogs.module.css';
import React from 'react';



const Dialog = (props) => {
    return (
        <div className={cl.user}>
            <NavLink to={"/dialogs/"+props.id} >{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={cl.message}> 
            <p>{props.message}</p>
        </div>
    );
}


const Dialogs = (props) => {
    const dialogComp = props.dialogPage.dialogsMemb.map(dialog => <Dialog  name={dialog.name} id={dialog.id}/>);
    const showMessage = props.dialogPage.messages.map(mes => <Message message={mes.message} id={mes.id}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();

    }

    let changeMessageText = () => {
        props.updateNewMessage(newMessageElement.current.value);

    }
    
   
    

    return (
        <div className={cl.dialogs}>
            <div className={cl.users__list}>
                {dialogComp}
                
            </div>
            <div className={cl.messages}>
                {showMessage}
                <div>
         <textarea ref={newMessageElement} onChange={changeMessageText} value={props.dialogPage.newMessageText}></textarea>
       </div>
       <div>
         <button onClick = {addMessage}>add posts</button>
       </div>
            </div>
        </div>
    );
};

export default Dialogs;
