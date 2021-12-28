import React from "react";
import classes from "./login_form.module.css";
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

export type LoginFormFieldsType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

const LoginForm: React.FC<InjectedFormProps<LoginFormFieldsType>> = (props) => {
    return (
        <form 
            onSubmit={props.handleSubmit}
            className={classes.formWrap}>
                <Field component="input" name="email" placeholder='Email' autoComplete='on'/>

                <Field component="input" name="password" placeholder='Password' autoComplete='on'/>

                <div>                        
                    <label htmlFor="remember">Remember me</label>

                    <Field component="input" type="checkbox" name="rememberMe" id="remember"/>
                </div>

                { props.error && <div className={classes.errorMessage}>
                                    {props.error}
                                </div>}

                <button>
                    Send
                </button>
        </form>
    );
};

//reduxForm это хок который возвращает контейнерную компоненту
//в первом вызове мы передаем имя поля с данными формы

//вторым нашу компоненту с формой

//при вызове, контейнерная компонента соберет все данные с полей Field 
//и запустит функцыю handleSubmit которую передает в нащу компоненту в propsах
//в качестве обработчика на соьытие onSubmit

//в контейнерную компоненту нужно передать функцию onSubmit 
//для того чтобы реагировать насобитие из вне
//он первым аргументом пронимает объект с данными формы
const LoginReduxForm = reduxForm<LoginFormFieldsType>({form: 'login'})(LoginForm);

export default LoginReduxForm;