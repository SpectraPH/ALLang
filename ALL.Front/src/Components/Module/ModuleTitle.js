import React from "react";
import './CSS/ModuleTitle.css'

export default class ModuleTitle extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    handleClick() {
        console.log(this.props);
        window.location.href = "/module/" + this.props.module.id + "/cards";
    }

    render() {
        return (
            <div onClick={() => this.handleClick()} className={'moduleTitle'}>
                <div className={'box1'}>
                    <div>
                        <h2>{this.props.module.title}</h2>
                    </div>
                    <div>
                        <span>{this.props.module.translations.length} слова</span>
                    </div>
                </div>
                <div className={'box2'}>

                </div>
                <div className={'box3'}>

                </div>
            </div>
        );
    }
}