import React, { useState } from "react";
import classes from "./profile_status.module.css";

type StatusPropsType = {
    title: string,
    updateStatus: (status: string) => void,
};

function ProfileStatus(props: StatusPropsType) {
    const {title = 'no status', updateStatus} = props;

    const [editMode, setEditMode] = useState(false);
    const [status, changeStatus] = useState(title);

    function onEditMode() {
        setEditMode(true);
    };

    function offEditMode() {
        updateStatus(status);
        setEditMode(false);
    };

    function offEditModeWithEnter(e: any) {
        if (e.code === 'Enter') {
            updateStatus(status);
            setEditMode(false);
        };
    };

    function imputChangeHandler(e: any) {
        changeStatus(e.target.value);
    }

    return (
        <div className={classes.status}>
            {
                editMode 

                ?<div>
                    <input 
                        defaultValue={status}
                        autoFocus
                        onBlur={offEditMode}
                        onKeyPress={e => offEditModeWithEnter(e)}
                        onChange={e => imputChangeHandler(e)}>
                    </input>
                </div>

                :<div>
                    <span
                        onDoubleClick={onEditMode}>
                        {title}
                    </span>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;