import React from 'react';
import './App.css'
import {isLogin} from './IsLogin'

export default function App() {

    return (
        <div>
            <div className={'container'}>
                {isLogin() ? (
                        <h1 style={{textAlign:"center"}}>ВЫ ВОШЛИ</h1>
                    )
                    : (
                        <h1 style={{textAlign:"center"}}>ЗДЕСЬ ДОЛЖНА БЫТЬ ГЛАВНАЯ СТРАНИЦА</h1>
                    )
                }
            </div>
        </div>
    );
}
