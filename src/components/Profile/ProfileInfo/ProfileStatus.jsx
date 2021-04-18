import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.span} >
                {!this.state.editMode &&
                    <div>
                        <span className={s.mainSpan} onClick={this.activateEditMode.bind(this)}>{this.props.status || 'изменить статус'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.input} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        )

    }
};

export default ProfileStatus;