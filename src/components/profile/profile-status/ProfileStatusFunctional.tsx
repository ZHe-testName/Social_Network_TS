import React, { KeyboardEvent, useEffect, useRef, useState }  from "react";
import classes from "./profile_status.module.css";

type StatusPropsType = {
    titleStatus: string,
    updateStatus: (status: string) => void,
};

const ProfileStatusFunctional: React.FC<StatusPropsType> = ({titleStatus, updateStatus}) => {
    const [isEditMode, setEditMode] = useState(false);
    const [status, changeStatus] = useState(titleStatus);

    useEffect(() => {
        changeStatus(titleStatus);
    }, [titleStatus]);

    const offEditMode = () => {
        updateStatus(status);

        setEditMode(false);
    }

    const offEditModeWithEnter = (e: KeyboardEvent) => {
        if (e.code === 'Enter') {
            setEditMode(false);
        };
    };

    return (
        <div >
            {
                isEditMode 

                ?
                <div>
                    <input 
                        value={status}
                        defaultValue={status}
                        autoFocus
                        onBlur={offEditMode}
                        onKeyPress={e => offEditModeWithEnter(e)}
                        onChange={e => changeStatus(e.target.value)}>
                    </input>
                </div>

                :
                <div>
                    <span
                        onDoubleClick={() => setEditMode(true)}>
                        {status || 'no status'}
                    </span>
                </div>
            }
        </div>
    )
};

export default ProfileStatusFunctional;