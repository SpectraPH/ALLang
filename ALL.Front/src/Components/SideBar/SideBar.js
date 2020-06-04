import React from "react";
import "./SideBar.css"
import { useSpring, animated } from "react-spring";

export default class SideBar extends React.Component{


    handleExit(){
        sessionStorage.removeItem("accessToken")
    }

    handleMenu(index){
        switch (index) {
            case 1:
                document.location.href = "/profile"
                break;
            case 2:
                document.location.href = "/modules"
                break;
            case 3:
                document.location.href = "/add"
                break;
            case 4:
                document.location.href = "/settings"

        }
    }

    render() {
        const menu = "sideBarItem";
        const activeMenu="sideBarItemActive";
        return(
            <div className={'sideBar'}>
                <div className={document.location.href === "http://localhost:3000/profile"? activeMenu : menu}
                    onClick={() => this.handleMenu(1)}>
                    <div>
                        <a href={"/profile"}>Профіль</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/modules" ? activeMenu : menu}
                    onClick={() => this.handleMenu(2)}>
                    <div>
                        <a href="/modules">Мої модулі</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/add" ? activeMenu : menu}
                     onClick={() => this.handleMenu(3)}>
                    <div>
                        <a href="/add">Створити новий модуль</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/settings" ? activeMenu : menu}
                     onClick={() => this.handleMenu(4)}>
                    <div>
                        <a href={"/settings"}>Налаштування</a>
                    </div>
                </div>

                <div className={document.location.href === "/module" ? activeMenu : menu}
                     onClick={() => this.handleMenu(5)}>
                    <div>
                        <a>Допомога</a>
                    </div>
                </div>

                <div className={document.location.href === "/module" ? activeMenu : menu}
                     onClick={() => this.handleMenu(6)}>
                    <div >
                        <a href={"/"} onClick={() => this.handleExit()}>Вихід</a>
                    </div>
                </div>
            </div>
        )
    }
}