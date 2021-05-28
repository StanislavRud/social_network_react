import React from 'react';
import style from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={style.sendMessageArea} onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={Textarea}
                       placeholder='Enter your message'
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button type={'submit'} >Send Message</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

