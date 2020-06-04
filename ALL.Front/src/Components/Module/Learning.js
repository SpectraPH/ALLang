import React from "react";
import "./CSS/Lerning.css"

export default class Learning extends React.Component{

    state = {
        isCorrect:[],
        currentIndex:0
    }

    componentDidMount() {
        for(let i = 0; i < this.props.module.translations.length; i++){
            this.state.isCorrect.push(false);
        }
        this.setState({isCorrect:this.state.isCorrect});
        document.getElementById("input_L").value = this.props.module.translations[0].word
        console.log(this.state)
    }

    checkAllAnswers(){
        for(let i = 0; i < this.state.isCorrect.length; i++){
            if(!this.state.isCorrect[i])
                return false
        }
        return true
    }


    handleClick(index){
        let input = document.getElementById("input_L");
        let input2 = document.getElementById("input")
        input.value = this.props.module.translations[index].word;
        if(this.state.isCorrect[index]) {
            input2.value = this.props.module.translations[index].wordTranslation
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        } else {
            document.getElementById("title").innerText = "Напишіть переклад"
            document.getElementById("title").className = "learningHeader"
            input2.value = ""
        }
        this.setState({currentIndex:index});


    }

    handleSubmit(){
        console.log(this.state.currentIndex);
        let value = document.getElementById("input").value;
        if(this.props.module.translations[this.state.currentIndex].wordTranslation === value) {
            this.state.isCorrect[this.state.currentIndex] = true
            this.setState({isCorrect: this.state.isCorrect});
            document.getElementById("title").innerText = "Правильно"
            document.getElementById("title").className = "right"
        }
        else {
            document.getElementById("title").innerText = "Неправильно"
            document.getElementById("title").className = "wrong"
        }

        if(this.checkAllAnswers())
            alert("OK")

    }


    render() {
        return (
            <div >
                <div className={"learningHeaderContainer"}>
                    <span id={"title"} className={"learningHeader"}>Напишіть переклад</span>
                </div>
                <div className={"learningInputBlock "}>
                    <div className={"centerContentInBlock"}>
                        <input className={"input"} id={"input_L"} />
                    </div>
                    <div className={"centerContentInBlock"}>
                        <input className={"input"} id={"input"}/>
                    </div>
                </div>
                <div className={"learningSubmitButtonContainer "}>
                    <button className={"button submitButton"} onClick={() => this.handleSubmit()}>Відповісти</button>
                </div>
                <div className={"learningIndexContainer"}>
                {
                    this.props.module.translations.map((tr,index) =>
                        <button className={"learningIndex"} onClick={() => this.handleClick(index)}>{index + 1}</button>
                    )}
                </div>
            </div>
        );
    }
}