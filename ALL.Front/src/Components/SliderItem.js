import React from "react";
import ReactCardFlip from "react-card-flip";
import './SliderItem.css';


export default class SliderItem extends React.Component {

    state = {
        isFlipped: false
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    render() {
        return (
            <div className={"sliderItemContainer"}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection={"vertical"}>
                    <div className={'sliderItem'} onClick={(e) => this.handleClick(e)}>
                        <span>{this.props.word}</span>
                        <img src={this.props.img}/>
                    </div>
                    <div className={'sliderItem'} onClick={(e) => this.handleClick(e)}>
                        <span>{this.props.wordTranslation}</span>
                    </div>

                </ReactCardFlip>
            </div>

        );
    }
}