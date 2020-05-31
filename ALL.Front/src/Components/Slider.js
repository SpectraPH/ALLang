import React from 'react';
import {Fade} from 'react-slideshow-image';
import './style.css'
import SliderItem from "./SliderItem";


export default class Slider extends React.Component {



    render() {
        const
            fadeProperties = {
                duration: 5000,
                transitionDuration: 500,
                infinite: true,
                indicators: false,
                autoplay: false
            }
        return (
            <div className="slide-container">
                <Fade {...fadeProperties}>
                    {this.props.module.translations.map(tr =>
                        <div className="each-fade">
                            <div className="image-container" style={{width:'100%'}}>
                                <SliderItem img={"https://localhost:44324/image/" + tr.imageURL} word={tr.word} wordTranslation={tr.wordTranslation}/>
                            </div>
                        </div>
                    )}
                </Fade>
            </div>
        )
    }
}
