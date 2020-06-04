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
                        {this.props.img !== "" ? <img src={"http://spectraph-001-site1.itempurl.com/image/" + this.props.img}/> : <></>}

                    </div>
                    <div className={'sliderItem'} onClick={(e) => this.handleClick(e)}>
                        <span>{this.props.wordTranslation}</span>
                    </div>

                </ReactCardFlip>
            </div>

        );
    }
}