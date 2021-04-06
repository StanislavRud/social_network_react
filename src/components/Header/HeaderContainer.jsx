import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        usersAPI.auth()
            .then(data => {
                this.props.toggleIsFetching(false);
               if (data.resultCode === 0) {
                   let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
               }
            })
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching}) (HeaderContainer);