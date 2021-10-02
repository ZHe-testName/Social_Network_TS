import React, { useEffect, useState } from "react";
import classes from "./profile_status.module.css";

type StatusPropsType = {
    title: string,
    updateStatus: (status: string) => void,
};

function ProfileStatus(props: StatusPropsType) {
    const {title = 'no status', updateStatus} = props;

    const [editMode, setEditMode] = useState(false);

    function onEditMode() {
        setEditMode(true);
    };

    function offEditMode(e: any) {
        updateStatus(e.target.value);
        setEditMode(false);
    };

    return (
        <div className={classes.status}>
            {
                editMode 

                ?<div>
                    <input 
                        defaultValue={title}
                        autoFocus
                        onBlur={e => offEditMode(e)}>
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