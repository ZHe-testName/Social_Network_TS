import React, { useState } from "react";
import classes from "./profile_status.module.css";

type StatusPropsType = {
    title?: string,
};

function ProfileStatus(props: StatusPropsType) {
    const {title = 'no status'} = props;

    const [editMode, setEditMode] = useState(false);

    function onEditMode() {
        setEditMode(true);
    }

    function offEditMode() {
        setEditMode(false);
    }


    return (
        <div className={classes.status}>
            {
                editMode 

                ?<div>
                    <input 
                        value={title}
                        autoFocus
                        onBlur={offEditMode}>
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