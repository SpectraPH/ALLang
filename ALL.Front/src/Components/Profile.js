import React from "react";
import "./Profile.css"
import axios from "axios";

import ProfileIMG from "../img/userProfile.png"

export default class Profile extends React.Component{

    state = {
        login : null,
        email : null,
        profileImage:null
    }

    componentDidMount() {
        axios.get(`http://spectraph-001-site1.itempurl.com/user/` + sessionStorage.getItem("username"))
            .then(res => {
                console.log(res);
                this.setState({login : res.data.login})
                this.setState({profileImage : res.data.profileImage})
                this.setState({email : res.data.email})
            })
    }

    render() {
        return (
            <div>
                <div className={"profileContainer"}>
                    <div className={"profileImageContainer"}>
                        <img className={"profileImageContainer"}
                             src={this.state.profileImage!==null ? "http://spectraph-001-site1.itempurl.com/image/" + this.state.profileImage : ProfileIMG} />
                    </div>
                    <div className={"profileInfoContainer"}>
                        <span>Username : {this.state.login}</span>
                        <span>Email : {this.state.email}</span>
                    </div>
                </div>
            </div>
        );
    }
}