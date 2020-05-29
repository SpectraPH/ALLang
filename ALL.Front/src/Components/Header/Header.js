import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";

export default function Header() {
    return (
        <div>
            <div className={'navBar'}>
                <div className={'navBarContainer'}>
                    <div className={'logo'}>
                        <span>ALLang</span>
                    </div>
                    <div className={'linkBlock'}>
                        <div className={'linkLeft'}>
                            <div>
                                <a href={"/"}>Главная</a>
                            </div>
                        </div>

                        <div className={'link'}>
                            <div>
                                <a>О нас</a>
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