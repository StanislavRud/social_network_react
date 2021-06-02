import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'E-mail'} name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'}
                       component={Input}
                       validate={[required]}
                       type={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } else {
        return (
            <div>
                <h1>Please LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
