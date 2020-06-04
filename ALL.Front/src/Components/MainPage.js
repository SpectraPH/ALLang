import React from "react";
import "./MainPage.css";

import blocks from "../img/1.png"
import gamepad from "../img/2.png"
import docs from "../img/3.png"
import images from "../img/4.png"
import notebook from "../img/5.png"
import about from "../img/about.png"
import arrow from "../img/arrow.png"
import main from "../img/main.jpg"


export default function MainPage() {
    return (
        <div>
            <div className="headerMainPage">
                <header  className="header_title">
                    <div>
                    <h1 id="header1">ВИВЧАЙТЕ</h1>
                    </div>
                    <div>
                    <h1 id="header2">НОВУ</h1>
                    </div>
                    <div>
                    <h1 id="header3">ЛЕКСИКУ</h1>
                    </div>
                    <div>
                    <h1 id="header4">ЛЕГКО</h1>
                    </div>
                </header>
                <div className="col">
                    <div><a href="#" className="buttonMainPage"> Увійти </a></div>
                    <div className="header_signup">
                        <h2>Немає обліковогу запису? <a href="#" className="sign-up">Створиту тут</a></h2></div>
                    <div className="header_arrow">
                        <a href="#down"><img src={arrow}/></a>
                    </div>
                </div>

            </div>

            <main className="portfolio">
                <div className="containerMainPage">
                    <div className="row">

                        <div className="col3">
                            <div className="portfolio_item">
                                <div className="portfolio_image3">
                                    <img src={about} alt="Booking"/>
                                </div>
                            </div>
                        </div>

                        <div className="col3">
                            <div className="portfolio_item">
                                <div className="portfolio_title2">
                                    <div className="titleMainPage">Чому саме ми?</div>
                                </div>
                                <div className="portfolio_text2">
                                    <p>Наш сервіс дозволить людям простіше вивчати лексику іноземних мов так, як вона використовується у повсякденному житті. Також, ми зробимо процес навчання більш інтерактивним та цікавим.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <main className="portfolio2">
                <div className="containerMainPage">

                    <div className="row">

                        <div className="col">
                            <div className="portfolio_item">
                                <div className="portfolio_image">
                                    <img src={blocks} alt="Booking"/>
                                </div>
                                <div className="portfolio_title">
                                    <a href="#">Модульна система  <br/>вивчення</a>
                                </div>
                                <div className="portfolio_text">
                                    <p>Ви можете власноруч складати модулі з довільних слів.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="portfolio_item">
                                <div className="portfolio_image">
                                    <img src={docs} alt="About us"/>
                                </div>
                                <div className="portfolio_title">
                                    <a href="#" name="down">Підбір синонімів<br/>і контексту</a>
                                </div>
                                <div className="portfolio_text">
                                    <p>Під час вивчення нового слова, вам пропонується не тільки його переклад, а й кілька синонімів, а також приклади використання цього слова в контексті.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="portfolio_item">
                                <div className="portfolio_image">
                                    <img src={images} alt="Menu"/>
                                </div>
                                <div className="portfolio_title">
                                    <a href="#">Візуальні асоціації</a>
                                </div>
                                <div className="portfolio_text">
                                    <p>Під час складання модуля, кожному перекладу пропонується кілька зображення для кращого розуміння сенсу слова.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col2">
                            <div className="portfolio_item">
                                <div className="portfolio_image2">
                                    <img src={notebook} alt="Booking"/>
                                </div>
                                <div className="portfolio_title">
                                    <a href="#">Тестування</a>
                                </div>
                                <div className="portfolio_text">
                                    <p>Проходьте тести, складені на основі лексики в складеному вами модулем, щоб перевірити свої знання.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col2">
                            <div className="portfolio_item">
                                <div className="portfolio_image2">
                                    <img src={gamepad} alt="Menu"/>
                                </div>
                                <div className="portfolio_title">
                                    <a href="#">Інтерактив</a>
                                </div>
                                <div className="portfolio_text">
                                    <p>Вам пропонується інтерактивні завдання які використовують лексику з конкретного модуля, щоб зробити вивчення більш цікавим.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
)
}