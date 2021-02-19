import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar
                // state={props.state.sideBar}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                    // dialogsPage={props.state.dialogsPage}
                    // dispatch={props.dispatch}
                    // store={props.store}
                />}/>

                <Route path='/profile' render={() => <Profile
                    // profilePage={props.state.profilePage}
                    // dispatch={props.dispatch}
                    // store={props.store}
                />}/>

                <Route path='/music' render={() => <Music/>}/>

                <Route path='/news' render={() => <News/>}/>

                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
