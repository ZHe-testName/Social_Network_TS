import React from "react";

type StatusPropsType = {
    title?: string,
};

function ProfileStatus(props: StatusPropsType) {
    const {title = 'no status'} = props;

    return (
        <div>
            <div>
                <span>
                    {title}
                </span>
            </div>

            <div>
                <input value={title}>
                </input>
            </div>
        </div>
    );
};

export default ProfileStatus;