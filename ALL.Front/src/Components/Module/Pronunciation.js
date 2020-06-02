import React from "react";
import SpeechSynthesis from "../SpeechSynthesis";
import SpeechRecognition from "../SpeechRecognition";
import "./CSS/Pronunciation.css"

export default class Pronunciation extends React.Component {

    state = {
        isCorrect: [],
        currentIndex: 0
    }

    componentDidMount() {
        for (let i = 0; i < this.props.module.translations.length; i++) {
            this.state.isCorrect.push(-1);
        }
        this.setState({isCorrect: this.state.isCorrect});

        document.getElementById("word").innerHTML = this.props.module.translations[0].word

        console.log(this.state)
    }

    componentDidUpdate() {
        if (this.state.isCorrect[this.state.currentIndex] === 1) {
            document.getElementById("title").innerText = "Правильно"
        }
    }

    updateData = (value) => {
        if (value === this.props.module.translations[this.state.currentIndex].word) {
            this.state.isCorrect[this.state.currentIndex] = 1
            this.setState({isCorrect: this.state.isCorrect});
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        }
        else {
            this.state.isCorrect[this.state.currentIndex] = 0
            this.setState({isCorrect: this.state.isCorrect});
            document.getElementById("title").innerText = "Неправильно"
            document.getElementById("title").className = "wrong"
        }

    }

    checkAllAnswers() {
    }


    handleClick(index) {
        let word = document.getElementById("word");
        word.innerHTML = this.props.module.translations[index].word
        if (this.state.isCorrect[index] === 1) {
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        } else if (this.state.isCorrect[index] === 0){
            document.getElementById("title").innerText = "Неправильно"
            document.getElementById("title").className = "wrong"
        }
        else {
            document.getElementById("title").innerText = "Скажите слово"
            document.getElementById("title").className = "learningHeader"
        }
        this.setState({currentIndex: index});
    }


    render() {
        return (
            <div className={"pronunciationContainer"}>
                <div className={"learningHeaderContainer"}>
                    <span id={"title"} className={"learningHeader"}>Скажите слово</span>
                </div>
                <div className={"centerContentInBlock"}>
                    <div className={"pronunciationInputContainer"}>
                        <span className={"pronunciationWord"} id={"word"}> </span>
                        <div className={"pronunciationButton"}>Прослушать</div>
                        <SpeechSynthesis text={this.props.module.translations[this.state.currentIndex].word}/>
                        <div className={"pronunciationButton"}>Сказать</div>
                        <SpeechRecognition updateData={this.updateData} lang={"en-US"}/>
                    </div>
                </div>
                <div style={{margin:"20px 0 0 0"}}>
                    <div className={"learningIndexContainer"}>
                        {
                            this.props.module.translations.map((tr, index) =>
                                <button className={"learningIndex"}
                                        onClick={() => this.handleClick(index)}>{index + 1}</button>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}