import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = () => {
    return (
        <div>
          <h2>News</h2>
        </div>
    );
};

export default withAuthRedirect(News);
