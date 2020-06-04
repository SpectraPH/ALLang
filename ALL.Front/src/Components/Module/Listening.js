import React from "react";
import SpeechSynthesis from "../SpeechSynthesis";

export default class Listening extends React.Component {

    state = {
        isCorrect: [],
        currentIndex: 0
    }

    componentDidMount() {
        for (let i = 0; i < this.props.module.translations.length; i++) {
            this.state.isCorrect.push(false);
        }
        this.setState({isCorrect: this.state.isCorrect});
        console.log(this.props.module.translations)
    }

    checkAllAnswers() {
        for (let i = 0; i < this.state.isCorrect.length; i++) {
            if (!this.state.isCorrect[i])
                return false
        }
        return true
    }


    handleClick(index) {
        let input = document.getElementById("input_L");
        if (this.state.isCorrect[index]) {
            input.value = this.props.module.translations[index].word
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        } else {
            document.getElementById("title").innerText = "Введіть те, що чуєте"
            document.getElementById("title").className = "learningHeader"
            input.value = ""
        }
        this.setState({currentIndex: index});
    }

    handleSubmit() {
        let value = document.getElementById("input_L").value;
        console.log(value)
        console.log(this.props.module.translations[this.state.currentIndex].word)
        if (this.props.module.translations[this.state.currentIndex].word === value) {
            this.state.isCorrect[this.state.currentIndex] = true
            this.setState({isCorrect: this.state.isCorrect});
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        } else {
            document.getElementById("title").innerText = "Неправильно"
            document.getElementById("title").className = "wrong"

        }


        if (this.checkAllAnswers())
            alert("OK")

    }


    render() {
        return (
            <div>
                <div className={"learningHeaderContainer"}>
                    <span id={"title"} className={"learningHeader"}>Введіть те, що чуєте</span>
                </div>
                <div className={"centerContentInBlock"}>
                    <div className={"learningInputBlock"}>
                        <SpeechSynthesis text={this.props.module.translations[this.state.currentIndex].word}/>
                        <div style={{margin:"15px 0 0 0"}}>
                            <input className={"input"} id={"input_L"}/>
                        </div>
                    </div>
                </div>
                <div className={"learningSubmitButtonContainer"}>
                    <button className={"button submitButton"} onClick={() => this.handleSubmit()}>Відповісти</button>
                </div>
                <div className={"learningIndexContainer"}>
                    {
                        this.props.module.translations.map((tr, index) =>
                            <button className={"learningIndex"}
                                    onClick={() => this.handleClick(index)}>{index + 1}</button>
                        )}
                </div>
            </div>
        );
    }
}