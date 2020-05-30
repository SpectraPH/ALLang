import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import {isLogin} from './IsLogin'
import {PrivateRoute} from "./Components/PrivateRoute";
import SideBar from "./Components/SideBar/SideBar";
import Adding from "./Components/CreatingModule/adding";

export default function App() {

    return (
        <div>
            <div>
                {isLogin() ? (
                        <div className={'container'}>
                            <div className={'sideBarBlock'}>
                                <SideBar/>
                            </div>
                            <div className={'contentBlock'}>
                                <BrowserRouter>
                                    <PrivateRoute path="/add" component={Adding}/>
                                </BrowserRouter>
                            </div>
                        </div>
                    )
                    : (
                        <h1 style={{textAlign: "center"}}>ЗДЕСЬ ДОЛЖНА БЫТЬ ГЛАВНАЯ СТРАНИЦА</h1>
                    )
                }
            </div>
        </div>
    );
}
