import React from "react";
import "./CSS/Test.css"

export default class Test extends React.Component {

    state = {
        isCorrect: [],
        isSubmit : false
    }

    componentDidMount() {
        for (let i = 0; i < this.props.module.translations.length; i++) {
            this.state.isCorrect.push(false);
        }
        this.setState({isCorrect: this.state.isCorrect});
    }

    handleChange(e, index) {
        if (this.props.module.translations[index].wordTranslation === e.target.value) {
            this.state.isCorrect[index] = true;
            this.setState({isCorrect: this.state.isCorrect});
        }
    }

    handleSubmit(){
        this.setState({isSubmit : true});
    }

    checkAnswers(){
        let counter = 0;
        this.state.isCorrect.forEach(item => {
            if(item)
                counter++
        })
        return counter;
    }

    render() {
        return (
            <div className={"TestContainer"}>
                {this.props.module.translations.map((tr, index) =>
                    <div >
                        <div className={"testWordContainer"}>
                            <span>{tr.word}</span>
                        </div>
                        <div className={this.state.isSubmit ? this.state.isCorrect[index] ? "correct testInputContainer" :  "incorrect testInputContainer" : "testInputContainer"}>
                            <input onChange={(e) => this.handleChange(e, index)}/>
                        </div>
                    </div>
                )}
                <button className={"button estSubmitButton"} onClick={() => this.handleSubmit()}>Завершити тест</button>
                {this.state.isSubmit ? (
                    <div>
                       <span>{this.checkAnswers() + "/" + this.state.isCorrect.length}</span>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        );
    }


}