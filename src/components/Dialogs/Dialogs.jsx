import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form className={style.sendMessageArea} onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={'textarea'} type={'text'} placeholder='Enter your message'/>
            </div>
            <div>
                <button type={'submit'}>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
