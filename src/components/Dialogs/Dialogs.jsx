import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let textMessage = React.createRef();

    let sendMessage = () => {
        let message = textMessage.current.value;
        alert(message);
        textMessage.current.value = '';
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.sendMessageArea}>
                    <textarea ref={ textMessage }></textarea>
                    <button onClick={ sendMessage }>Send Message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
