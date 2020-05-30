import React from "react";
import "./SideBar.css"

export default class SideBar extends React.Component{


    handleExit(){
        sessionStorage.removeItem("accessToken")
    }

    handleMenu(index){}

    render() {
        const menu = "sideBarItem";
        const activeMenu="sideBarItemActive";
        return(
            <div className={'sideBar'}>
                <div className={document.location.href === "http://localhost:3000/profile"? activeMenu : menu}
                    onClick={() => this.handleMenu(1)}>
                    <div>
                        <a href={"/profile"}>Профиль</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/modules" ? activeMenu : menu}
                    onClick={() => this.handleMenu(2)}>
                    <div>
                        <a href="/modules">Мои модули</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/add" ? activeMenu : menu}>
                    <div>
                        <a href="/add">Создать новый модуль</a>
                    </div>
                </div>

                <div className={document.location.href === "http://localhost:3000/settings" ? activeMenu : menu}
                     onClick={() => this.handleMenu(4)}>
                    <div>
                        <a href={"/settings"}>Настройки</a>
                    </div>
                </div>

                <div className={document.location.href === "/module" ? activeMenu : menu}
                     onClick={() => this.handleMenu(5)}>
                    <div>
                        <a>Помощь</a>
                    </div>
                </div>

                <div className={document.location.href === "/module" ? activeMenu : menu}
                     onClick={() => this.handleMenu(6)}>
                    <div >
                        <a href={"/"} onClick={() => this.handleExit()}>Выход</a>
                    </div>
                </div>
            </div>
        )
    }
}