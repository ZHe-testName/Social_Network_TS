import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import classes from './textarea.module.css';

type CustomProps = {
    rows?: number,
    cols?: number,
    wrapclassname?: string,
    placeholder?: string,
};

const Textarea: React.FC<WrappedFieldProps & CustomProps> = ({meta, input, ...restProps}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${classes.textareaWrap} ${restProps.wrapclassname}`}>
            <textarea 
                    {...input}
                    {...restProps}
                    className={`${hasError ? classes.error : ''}`}></textarea>
        </div>
    );
};

export default Textarea;