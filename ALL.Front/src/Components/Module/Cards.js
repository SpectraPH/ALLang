import React from "react";
import Slider from "../Slider";

export default class Cards extends React.Component{
    render() {
        return(
            <div>
                <div className={'sliderContainer'}>
                    <Slider module={this.props.module}/>
                </div>

                <div className={'editButtonContainer'}>
                    <button onClick={() => this.props.handleEdit(this.props.module.id)} className={'button'}>Редактировать</button>
                </div>
            </div>
        );
    }
}