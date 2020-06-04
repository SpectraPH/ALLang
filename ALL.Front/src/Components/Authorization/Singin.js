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

        const response = await fetch("http://spectraph-001-site1.itempurl.com/token", {
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
                    <h2 style={{fontWeight: "bolder"}}>Авторизація</h2>
                </div>
                <div className={"centerContentInBlock"} style={{color:"red"}}>
                    {this.state.isWrongResponse ? <><span>Невірний логин або/та пароль</span><br/></> : <></>}
                </div>
                <div className={"loginInputBlock"}>
                    <input placeholder={"логін"} className={"input"} id="emailLogin"/>
                </div>
                <div className={"loginInputBlock"}>
                    <input placeholder={"пароль"} className={"input"} type="password" id="passwordLogin"/>
                </div>


                <div className={"centerContentInBlock"}>
                    <button className={"loginButton"} onClick={() => this.formData()} type="submit"
                            id="submitLogin">Увійти
                    </button>
                </div>

                <div className={"centerContentInBlock"}>
                    <button className={"registrationButton"}
                            onClick={() => this.props.handleRegistration()}>Створити аккаунт
                    </button>
                </div>
            </div>
        );
    }
}