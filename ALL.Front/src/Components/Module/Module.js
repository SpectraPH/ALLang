import React from "react";
import './CSS/Module.css'
import axios from "axios";
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Cards from "./Cards";
import Learning from "./Learning";
import Listening from "./Listening";
import Pronunciation from "./Pronunciation";
import Test from "./Test";


export default class Module extends React.Component {
    state = {
        id: '',
        title: '',
        translations: [{
            word: '',
            wordTranslation: '',
            imgURL: ''
        }
        ]
    }

    componentDidMount() {
        axios.get(`http://spectraph-001-site1.itempurl.com/module/` + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({id: res.data.id});
                this.setState({title: res.data.title});
                this.setState({translations: res.data.translations});
            })
        console.log(this.state)
    }

    handleEdit(index) {
        window.location.href = "/edit/" + index;
    }
    async handleDelete(index) {
        const response = await fetch("http://spectraph-001-site1.itempurl.com/module/" + index, {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        });
        window.location.href = "/modules"
    }



    render() {
        const id = "/module/" + this.state.id;

        const st = this.state;
        const hn = this.handleEdit;
        const hnd = this.handleDelete;

        const WrappedCards = function (props) {
            return (<Cards {...props} module={st} handleEdit={hn} handleDelete={hnd}/>)
        }

        const WrappedLearning = function (props) {
            return (<Learning {...props} module={st}/>)
        }

        const WrappedListening = function (props) {
            return (<Listening {...props} module={st}/>)
        }

        const WrappedPronunciation = function (props) {
            return (<Pronunciation {...props} module={st}/>)
        }

        const WrappedTest = function (props) {
            return (<Test {...props} module={st}/>)
        }



        const active = "moduleSectionActive"
        const inactive = "moduleSectionInactive"

        return (


            <div>
                <div className={'moduleHeaderContainer'}>
                    <span className={'moduleHeader'}>{this.state.title}</span>
                </div>

                <div className={'moduleSectionContainer'}>
                    <a href={id + "/cards"}
                       className={document.location.href === "http://localhost:3000/module/" + this.state.id + "/cards" ? active : inactive}>Картки</a>
                    <a href={id + "/l"}
                       className={document.location.href === "http://localhost:3000/module/" + this.state.id + "/l" ? active : inactive}>Вивчення</a>
                    <a href={id + "/a"}
                       className={document.location.href === "http://localhost:3000/module/" + this.state.id + "/a" ? active : inactive}>Аудиювання</a>
                    <a href={id + "/s"}
                       className={document.location.href === "http://localhost:3000/module/" + this.state.id + "/s" ? active : inactive}>Вимова</a>
                    <a href={id + "/t"}
                       className={document.location.href === "http://localhost:3000/module/" + this.state.id + "/t" ? active : inactive}>Тест</a>
                </div>

                <BrowserRouter>
                    <Route path={"/module/:id/cards"} component={WrappedCards}/>
                    <Route path={"/module/:id/l"} component={WrappedLearning}/>
                    <Route path={"/module/:id/a"} component={WrappedListening}/>
                    <Route path={"/module/:id/s"} component={WrappedPronunciation}/>
                    <Route path={"/module/:id/t"} component={WrappedTest}/>
                </BrowserRouter>

            </div>


        );
    }

}