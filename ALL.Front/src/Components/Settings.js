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
        axios.get(`http://spectraph-001-site1.itempurl.com/user/` + sessionStorage.getItem("username"))
            .then(res => {
                this.setState({login: res.data.login})
                this.setState({profileImage: res.data.profileImage})
                this.setState({email: res.data.email})
            })
    }

    async handleSubmit() {
        const formData = new FormData();
        let email = document.getElementById("emailSet").value

        if (email === "")
            formData.append("email", this.state.email);
        else
            formData.append("email", document.getElementById("emailSet").value);

        formData.append("image", document.getElementById("imgInput").files[0]);
        formData.append("login", sessionStorage.getItem("username"));


        const response = await fetch("http://spectraph-001-site1.itempurl.com/user", {
            method: "PUT",
            headers: {"Accept": "application/json"},
            body: formData
        })

        document.location.href = "/settings"
    }

    render() {
        return (
            <div>
                <div>

                    <div className={"settingsHeaderContainer"}>
                        <h2>Налаштування профілю</h2>
                    </div>

                    <div className={"settingsUserContainer"}>
                        <img className={"settingsProfileImage"}
                             src={this.state.profileImage !== null ? "http://spectraph-001-site1.itempurl.com/image/" + this.state.profileImage : ProfileIMG}/>
                        <span>{this.state.login}</span>
                    </div>

                    <div className={"settingsContainer"}>
                        <div className={"settingsLabelsContainer"}>
                            <div className={"settingsInputContainer"}>
                                <label>Email</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Мікрофон</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Звук</label>
                            </div>
                            <div className={"settingsInputContainer"}>
                                <label>Картинка профілю</label>
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
                                    <span className="title">Завантажити</span>
                                    <input type={"file"} id="imgInput"/>
                                </label>
                            </div>
                        </div>
                    </div>


                    <button onClick={() => this.handleSubmit()} className={"button"}>Зберегти зміни</button>
                </div>
            </div>
        );
    }
}