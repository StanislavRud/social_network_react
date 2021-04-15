import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = () => {
    return (
        <div>
            <h2>Settings</h2>
        </div>
    );
};

export default withAuthRedirect(Settings);
