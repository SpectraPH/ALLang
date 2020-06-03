import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import ProfileIMG from "../../img/userProfile.png";
import Singin from "../Authorization/Singin";
import Registration from "../Authorization/Registration";
import {isLogin} from "../../IsLogin";
import axios from "axios";


export default function Login() {

    const [login, setLogin] = useState(0);
    const [img, setImg] = useState(1);


    if(isLogin()) {
        axios.get(`https://localhost:44324/user/` + sessionStorage.getItem("username"))
            .then(res => {
                console.log(res);
                setLogin(res.data.login)
                setImg(res.data.profileImage)

            })
    }

    const [showRegistration, setShowRegistration] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseRegistration = () => setShowRegistration(false);
    const handleShowRegistration = () => setShowRegistration(true);

    const registration = function () {
        handleCloseLogin()
        handleShowRegistration()
    }

    const LoginModal = (
        <Modal show={showLogin}
               onHide={handleCloseLogin}
               size={"sm"}
               centered>
            <Modal.Body>
                <Singin handleRegistration={registration}  />
            </Modal.Body>
        </Modal>
    )

    const RegistrationModal = (
        <Modal show={showRegistration} onHide={handleCloseRegistration} size={"sm"} centered>
            <Modal.Body>
                <Registration />
            </Modal.Body>
        </Modal>
    )



    return (
        <div>
            {LoginModal}
            {RegistrationModal}
            {isLogin() ?  <div>
                <span>{sessionStorage.getItem("username")}</span>
                <img className={"loginProfileImage"}
                     src={img !== null ? "https://localhost:44324/image/" + img : ProfileIMG}/>
            </div> : <a onClick={() => handleShowLogin()}>Вход</a>
            }
        </div>
    )
}