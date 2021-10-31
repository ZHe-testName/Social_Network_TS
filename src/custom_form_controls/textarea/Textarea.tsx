import React from 'react';
import { InjectedFormProps } from 'redux-form';

import classes from './textarea.module.css';

type CustomProps = {
    rows: number,
    wrapClassName: string,
    placeholder: string,
};

const Textarea = (props:CustomProps & InjectedFormProps) => {
    console.log(props);
    return (
        <div 
            className={props.wrapClassName}>
            <textarea 
                    rows={props.rows}></textarea>
        </div>
    );
};

export default Textarea;