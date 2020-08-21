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

    const onKeYPress = (e) => {
        if (e.key === "Enter") {
            deactivateEditMode()
        }
    }

    return (
        <>
            {!editMode && <div>
                        <span
                            onDoubleClick={activateEditMode}>
                            <b>Status</b>: {props.status || 'no status'}
                        </span>
            </div>}
            {editMode && <div>
                Status:
                <input
                    onKeyPress={onKeYPress}
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    value={status}
                    onChange={onStatusChange}/>
            </div>
            }
        </>
    );
}


export default ProfileStatusWithHooks;