import React from "react";
import "./Settings.css"
import imgIcon from '../img/img.png'
import ProfileIMG from "../img/userProfile.png"
import axios from "axios";

export default class Settings extends React.Component {

    state = {
        login: null,
        email: null,
        profileImage: null
    }

    componentDidMount() {
        axios.get(`https://localhost:44324/user/` + sessionStorage.getItem("username"))
            .then(res => {
                console.log(res);
                this.setState({login: res.data.login})
                this.setState({profileImage: res.data.profileImage})
                this.setState({email: res.data.email})
            })
    }

    handleSubmit() {
        const formData = new FormData();

        let email = document.getElementById("emailSet").value

        if (email === "")
            formData.append("email", this.state.email);
        else
            formData.append("email", document.getElementById("emailSet").value);


        formData.append("image", document.getElementById("fileSet").files[0]);
        formData.append("login", sessionStorage.getItem("username"));


        const response = fetch("https://localhost:44324/user", {
            method: "PUT",
            headers: {"Accept": "application/json"},
            body: formData
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={() => this.handleSubmit()}>

                    <div className={"settingsHeaderContainer"}>
                        <h2>Настройка профиля</h2>
                    </div>

                    <div className={"settingsUserContainer"}>
                        <img className={"settingsProfileImage"}
                             src={this.state.profileImage !== null ? "https://localhost:44324/image/" + this.state.profileImage : ProfileIMG}/>
                        <span>{this.state.login}</span>
                    </div>

                    <div className={"settingsContainer"}>
                        <div className={"settingsLabelsContainer"}>
                            <div className={"settingsInputContainer"}>
                                <label>Email</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Микрофон</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Звук</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Картинка профиля</label>
                            </div>
                        </div>

                        <div className={"settingsInputsContainer"}>
                            <div className={"settingsInputContainer"}>
                                <input className={"input"} placeholder={this.state.email} id="emailSet"/>
                            </div>

                            <div className={"settingsInputCheckBoxContainer"}>
                                <input type={"checkbox"}/>
                                <label>вкл</label>
                            </div>

                            <div className={"settingsInputCheckBoxContainer"}>
                                <input type={"checkbox"}/>
                                <label>вкл</label>
                            </div>

                            <div className={"settingsInputContainer"}>
                                <label className={"imageBlock"}>
                                    <img src={imgIcon}/>
                                    <span className="title">Изображение</span>
                                    <input type={"file"} id="fileSet"/>
                                </label>
                            </div>
                        </div>
                    </div>


                    <input type={"submit"} className={"button"} value={"Сохранить изменения"}/>
                </form>
            </div>
        );
    }
}