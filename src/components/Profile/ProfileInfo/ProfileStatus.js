import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span
                            onDoubleClick={this.activateEditMode}>
                            Status: {this.props.status||"No status"}
                        </span>
                    </div>
                    : <div>
                        Status:
                        <input
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                            value={this.state.status}
                            onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;