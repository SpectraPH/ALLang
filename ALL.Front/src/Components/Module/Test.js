import React from "react";
import "./CSS/Test.css"

export default class Test extends React.Component {

    state = {
        isCorrect: []
    }

    componentDidMount() {
        for (let i = 0; i < this.props.module.translations.length; i++) {
            this.state.isCorrect.push(false);
        }
        this.setState({isCorrect: this.state.isCorrect});
    }

    handleChange(e, index) {
        if (this.props.module.translations[index].word === e.target.value) {
            this.state.isCorrect[index] = true;
            this.setState({isCorrect: this.state.isCorrect});
        }
    }

    handleSubmit(){
        let counter = 0;
        this.state.isCorrect.forEach(item => {
            if(item)
                counter++
        })
        alert(counter + '/' + this.state.isCorrect.length);
    }

    render() {
        return (
            <div className={"TestContainer"}>
                {this.props.module.translations.map((tr, index) =>
                    <div >
                        <div className={"testWordContainer"}>
                            <span>{tr.wordTranslation}</span>
                        </div>
                        <div className={"testInputContainer"}>
                            <input onChange={(e) => this.handleChange(e, index)}/>
                        </div>
                    </div>
                )}
                <button className={"button estSubmitButton"} onClick={() => this.handleSubmit()}>Завершите тест</button>
            </div>
        );
    }


}