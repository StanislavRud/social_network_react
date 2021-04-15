import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {
    return (
        <div>
           <h2>Music</h2>
        </div>
    );
};

export default withAuthRedirect(Music);
