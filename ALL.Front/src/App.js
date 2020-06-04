import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'

import ModuleList from './Components/Module/ModuleList';
import Adding from './Components/CreatingModule/adding';
import SideBar from "./Components/SideBar/SideBar";
import Module from "./Components/Module/Module";
import {PrivateRoute} from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import {isLogin} from './IsLogin'
import MainPage from "./Components/MainPage";

export default function App() {

    return (
        <div>

            {isLogin() ? (
                    <div className={'container'}>
                        <div className={'sideBarBlock'}>
                            <SideBar/>
                        </div>
                        <div className={'contentBlock'}>
                            <BrowserRouter>
                                <PrivateRoute path="/settings" component={Settings}/>
                                <PrivateRoute path="/profile" component={Profile}/>
                                <PrivateRoute path="/modules" component={ModuleList}/>
                                <PrivateRoute path="/module/:id" component={Module}/>
                                <PrivateRoute path="/add" component={Adding}/>
                                <PrivateRoute path="/edit/:id" component={Adding}/>
                            </BrowserRouter>
                        </div>
                    </div>
                )
                : (
                        <MainPage/>
                )

            }


        </div>
    );
}
