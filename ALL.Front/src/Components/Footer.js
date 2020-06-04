import React from "react";
import "./Footer.css"

import playMarket from "../img/playmarket.png"
import youtube from "../img/youtube.png"
import telegram from "../img/telegram.png"
import instagram from "../img/instagram.png"

export default class Footer extends React.Component {
    render() {
        return (
            <div className={"footerContainer"}>
                <div className={"footerImageContainer"}>

                    <span>Copyright © ALLang 2020  All rights reserved</span>

                    <div>
                        <img className={"footerImage"} src={playMarket} />
                    </div>

                    <div>
                        <img className={"footerImage"} src={telegram} />
                    </div>

                    <div>
                        <img className={"footerImage"} src={youtube} />
                    </div>

                    <div>
                        <img className={"footerImage"} src={instagram} />
                    </div>
                </div>
            </div>
        );
    }
}