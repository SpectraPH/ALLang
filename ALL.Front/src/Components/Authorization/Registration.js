import React from "react";
import "../style.css"

export default class Registration extends React.Component {

    state = {
        isWrongForm: false,
        isLoginAlreadyExist : false,
        isEmailAlreadyExist : false
    }

    validate() {
        let password1 = document.getElementById("passwordReg").value;
        let password2 = document.getElementById("passwordConfirm").value;

        return password1 === password2;
    }


    async handleSubmit() {
        if (this.validate()) {
            this.setState({isWrongForm: false});

            const formData = new FormData();
            formData.append("grant_type", "password");
            formData.append("email", document.getElementById("emailReg").value);
            formData.append("login", document.getElementById("loginReg").value);
            formData.append("password", document.getElementById("passwordReg").value);

            let status = 0;
            const response = await fetch("http://spectraph-001-site1.itempurl.com/registration", {
                method: "POST",
                headers: {"Accept": "application/json"},
                body: formData

            }).then(function (response) {
                status = response.status
            });

            if(status === 200) {

                const formData = new FormData();
                formData.append("grant_type", "password");
                formData.append("login", document.getElementById("loginReg").value);
                formData.append("password", document.getElementById("passwordReg").value);

                const response = await fetch("http://spectraph-001-site1.itempurl.com/token", {
                    method: "POST",
                    headers: {"Accept": "application/json"},
                    body: formData
                })

                const data = await response.json();

                sessionStorage.removeItem("accessToken");
                sessionStorage.setItem("accessToken", data.access_token);
                sessionStorage.setItem("username", data.username);
                document.location.href = "/modules"
            }
            else if(status === 600)
                this.setState({isLoginAlreadyExist:true, isEmailAlreadyExist : false});
            else if(status === 601)
                this.setState({isLoginAlreadyExist:false, isEmailAlreadyExist : true});



        } else {
            this.setState({isWrongForm: true, isLoginAlreadyExist:false, isEmailAlreadyExist : false});
        }
    }

    render() {
        return (
            <div className={"Singin"}>
                <div className={"centerContentInBlock"}>
                    <h2 style={{fontWeight: "bolder"}}>Registration</h2>
                </div>

                <div className={"loginInputBlock"}>
                    <input type={"email"} className={"input"} placeholder={"Email"} id="emailReg"/>
                </div>

                <div className={"loginInputBlock"}>
                    <input className={"input"} placeholder={"Login"} id="loginReg"/>
                </div>

                <div className={"loginInputBlock"}>
                    <input className={"input"} placeholder={"Password"} type={"password"}
                           id="passwordReg"/>
                </div>
                <div className={"loginInputBlock"}>
                    <input className={"input"} placeholder={"Confirm password"} type={"password"}
                           id="passwordConfirm"/>
                </div>
                <div className={"centerContentInBlock"} style={{color: "red"}}>
                    {this.state.isWrongForm ? <><span>пароли не совпадают</span><br/></> : <></>}
                    {this.state.isLoginAlreadyExist ? <><span>пользователь уже существует</span><br/></> : <></>}
                    {this.state.isEmailAlreadyExist ? <><span>email уже использован</span><br/></> : <></>}
                </div>
                <div className={"centerContentInBlock"}>
                    <input className={"loginButton"} onClick={() => this.handleSubmit()} type="submit"
                           id="submitLogin" value="Регистрация"/>
                </div>
            </div>
        );
    }
}