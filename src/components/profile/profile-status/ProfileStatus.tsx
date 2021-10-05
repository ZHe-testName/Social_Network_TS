import React  from "react";
import classes from "./profile_status.module.css";

type StatusPropsType = {
    titleStatus: string,
    updateStatus: (status: string) => void,
};

type LocalStateType = {
        editMode: boolean,
        status: string,
        updateStatus: (status: string) => void,
};

class ProfileStatus extends React.Component<StatusPropsType> {
    state = {
        editMode: false,
        status: this.props.titleStatus,
        updateStatus: this.props.updateStatus,
    }

    onEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    offEditMode = () => {
        this.state.updateStatus(this.state.status);

        this.setState({
            editMode: false,
        });
    }

    offEditModeWithEnter = (e: any) => {
        if (e.code === 'Enter') {
            this.offEditMode();
        };
    }

    imputChangeHandler = (e: any) => {
        this.setState({
            status: e.target.value,
        });
    }

    componentDidUpdate(prevProps: StatusPropsType, prevState: LocalStateType) {
        if (prevProps.titleStatus !== this.props.titleStatus) {
            this.setState({
                status: this.props.titleStatus,
            });
        };
    }

   render() {
       console.log('render' ,this.state.status , this.props.titleStatus);
    return (
        <div className={classes.status}>
            {
                this.state.editMode 

                ?<div>
                    <input 
                        defaultValue={this.state.status}
                        autoFocus
                        onBlur={this.offEditMode}
                        onKeyPress={e => this.offEditModeWithEnter(e)}
                        onChange={e => this.imputChangeHandler(e)}>
                    </input>
                </div>

                :<div>
                    <span
                        onDoubleClick={this.onEditMode}>
                        {this.state.status || 'no status'}
                    </span>
                </div>
            }
        </div>
    )
   } 
};

export default ProfileStatus;