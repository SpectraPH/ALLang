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
                    <button onClick={() => this.props.handleEdit(this.props.module.id)} style={{margin:"0 5px 0 5px"}} className={'button'}>Редагувати</button>
                    <button onClick={() => this.props.handleDelete(this.props.module.id)} style={{margin:"0 5px 0 5px"}} className={'button'}>Видалити</button>
                </div>
            </div>
        );
    }
}