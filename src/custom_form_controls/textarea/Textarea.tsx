import React from 'react';

import classes from './textarea.module.css';

const Textarea = (props: any) => {
    console.log(props);
    return (
        <div className={props.wrapClassName}>
            <textarea 
                    rows={props.rows}></textarea>
        </div>
    );
};

export default Textarea;