import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import logo from "../../img/logo.png"

export default function Header() {
    return (
        <div>
            <div className={'navBar'}>
                <div className={'navBarContainer'}>
                    <div className={'logo'}>
                        <img src={logo}/>
                    </div>
                    <div className={'linkBlock'}>
                        <div className={'linkLeft'}>
                            <div>
                                <a href={"/"}>Головна</a>
                            </div>
                        </div>

                        <div className={'link'}>
                            <div>
                                <a>Про нас</a>
                            </div>
                        </div>

                        <div className={'link'}>
                            <div>
                                <a>Контакты</a>
                            </div>
                        </div>

                        <div className={'link'}>
                            <div>
                               <Login/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}