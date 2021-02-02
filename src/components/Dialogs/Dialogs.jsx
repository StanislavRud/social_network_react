import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);

    let textMessage = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = textMessage.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.sendMessageArea}>
                    <textarea onChange={onMessageChange} ref={ textMessage } value={props.dialogsPage.newMessageText} />
                    <button onClick={ sendMessage }>Send Message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
