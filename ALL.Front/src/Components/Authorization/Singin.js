import React from "react";
import "./Authorization.css"
import "../style.css"

export default class Singin extends React.Component {

    state = {
        isWrongResponse: false
    }

    async formData() {
        let tokenKey = "accessToken";

        const formData = new FormData();
        formData.append("grant_type", "password");
        formData.append("login", document.getElementById("emailLogin").value);
        formData.append("password", document.getElementById("passwordLogin").value);

        const response = await fetch("https://localhost:44324/token", {
            method: "POST",
            headers: {"Accept": "application/json"},
            body: formData
        })


        const data = await response.json();

        console.log(response)
        if (response.status === 400) {
            this.setState({isWrongResponse: true})
        } else {
            this.setState({isWrongResponse: false})

            sessionStorage.removeItem(tokenKey);
            sessionStorage.setItem(tokenKey, data.access_token);
            sessionStorage.setItem("username", data.username);

            document.location.href = "/modules"
        }

    }

    render() {
        return (
            <div className={"Singin"}>
                <div className={"centerContentInBlock"}>
                    <h2 style={{fontWeight: "bolder"}}>Login</h2>
                </div>
                <div className={"centerContentInBlock"} style={{color:"red"}}>
                {this.state.isWrongResponse ? <><span>Неверный логин или/и пароль</span><br/></> : <></>}
                </div>
                <div className={"loginInputBlock"}>
                    <input placeholder={"Login"} className={"input"} id="emailLogin"/>
                </div>
                <div className={"loginInputBlock"}>
                    <input placeholder={"Password"} className={"input"} type="password" id="passwordLogin"/>
                </div>


                <div className={"centerContentInBlock"}>
                    <button className={"loginButton"} onClick={() => this.formData()} type="submit"
                            id="submitLogin">Войти
                    </button>
                </div>

                <div className={"centerContentInBlock"}>
                    <button className={"registrationButton"}
                            onClick={() => this.props.handleRegistration()}>Регистрация
                    </button>
                </div>
            </div>
        );
    }
}