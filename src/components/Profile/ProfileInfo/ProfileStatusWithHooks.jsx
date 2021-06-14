import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        return setEditMode(true);
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);

    };

    const onStatusChange = (e) => {
        return setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deActivateEditMode}
                       value={status}
                />
            </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;
