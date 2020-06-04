import React from "react";
import axios from "axios";

export default class ImageSuggestion extends React.Component {

    state = {
        img: []
    }

    componentDidMount() {
        axios.get('https://pixabay.com/api/?key=15222808-bbd3d56928b18f406c0e4275d&q=house&image_type=photo&pretty=true&per_page=3')
            .then(res => {
                console.log(res.data.hits);
                this.setState({img: res.data.hits})
            })
    }

    render() {
        return (
            <div>
                {this.state.img.map(image =>
                    <img src={image.webformatURL} />
                )}
            </div>
        );
    }
}