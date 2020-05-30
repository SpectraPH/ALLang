import React from "react";
import {Slide} from 'react-slideshow-image';
import './ImageSlider.css'
import axios from 'axios'

export default class ImageSlider extends React.Component {

    state = {
        img: [],
        currentIndex : -1,
    }

    componentDidMount() {
        let str = this.props.param;
        axios.get('https://pixabay.com/api/?key=15222808-bbd3d56928b18f406c0e4275d&q=' + str + '&image_type=photo&pretty=true&per_page=8')
            .then(res => {
                console.log(res.data.hits)
                this.setState({img: res.data.hits.map((i) => i.webformatURL)})
            })
    }

    componentDidUpdate(){
        let str = this.props.param;
        axios.get('https://pixabay.com/api/?key=15222808-bbd3d56928b18f406c0e4275d&q=' + str + '&image_type=photo&pretty=true&per_page=8')
            .then(res => {
                
                this.setState({img: res.data.hits.map((i) => i.webformatURL)})
            })
    }


    Handler(url, index) {
        this.props.updateData(url,this.props.index);
        this.setState({currentIndex:index});
    }

    render() {

        const active = "activeIMG";
        const inactive = "inactiveIMG";

        const properties = {
            transitionDuration: 400,
            infinite: true,
            indicators: false,
            arrows: true,
            autoplay: false
        }

        return (
            <div className="slide-container" style={{width: '670px', margin:'0 10px 0 10px'}}>
                <Slide {...properties}>
                    <div className="each-slide" style={{width: '670px', padding:'0 15px 0 15px'}}>
                        <img className={this.state.currentIndex===0 ? active : inactive} onClick={() => this.Handler(this.state.img[0],0)} src={this.state.img[0]}/>
                        <img className={this.state.currentIndex===1 ? active : inactive} onClick={() => this.Handler(this.state.img[1],1)} src={this.state.img[1]}/>
                        <img className={this.state.currentIndex===2 ? active : inactive} onClick={() => this.Handler(this.state.img[2],2)} src={this.state.img[2]}/>
                        <img className={this.state.currentIndex===3 ? active : inactive} onClick={() => this.Handler(this.state.img[3],3)} src={this.state.img[3]}/>
                    </div>
                    <div className="each-slide" style={{width: '670px', padding:'0 15px 0 15px'}}>
                        <img className={this.state.currentIndex===4 ? active : inactive} onClick={() => this.Handler(this.state.img[4],4)} src={this.state.img[4]}/>
                        <img className={this.state.currentIndex===5 ? active : inactive} onClick={() => this.Handler(this.state.img[5],5)} src={this.state.img[5]}/>
                        <img className={this.state.currentIndex===6 ? active : inactive} onClick={() => this.Handler(this.state.img[6],6)} src={this.state.img[6]}/>
                        <img className={this.state.currentIndex===7 ? active : inactive} onClick={() => this.Handler(this.state.img[7],7)} src={this.state.img[7]}/>
                    </div>
                </Slide>
            </div>
        )
    }
}