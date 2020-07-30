import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <div>
                        <span
                            onDoubleClick={activateEditMode}>
                            Status: {props.status || 'no status'}
                        </span>
            </div>}
            {editMode && <div>
                Status:
                <input
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    value={status}
                    onChange={onStatusChange}/>
            </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;