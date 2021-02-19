import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                <div>{ messagesElements }</div>
                <div className={style.sendMessageArea}>
                    <div>
                        <textarea onChange={ onNewMessageChange }
                                  value={newMessageBody}
                                  placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
