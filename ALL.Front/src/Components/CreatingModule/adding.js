import React from 'react';
import './adding.css'
import minus from '../../img/minus.png'
import plus from '../../img/plus.png'
import imgIcon from '../../img/img.png'
import SpeechRecognition from '../SpeechRecognition'
import ImageSlider from "./ImageSlider";
import axios from "axios";
import {Spring, Transition} from "react-spring/renderprops-universal";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

export default class Adding extends React.Component {

    add = true;

    state = {
        title: '',
        translations: [{
            word: '',
            wordTranslation: '',
            imagesIsVisible: false,
            imageURL : ''
        }],
        username: sessionStorage.getItem("username")

    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            axios.get(`http://spectraph-001-site1.itempurl.com/module/` + this.props.match.params.id)
                .then(res => {
                    console.log(res.data);
                    this.setState({id: res.data.id});
                    this.setState({title: res.data.title});
                    this.setState({translations: res.data.translations});
                })
            this.add = false;
        }
        console.log(this.state)
    }

    addField() {
        this.setState({
            translations: [...this.state.translations, {
                word: '',
                wordTranslation: '',
                imagesIsVisible: false
            }]
        })
    }

    handleChangeTitle(e) {
        this.state.title = e.target.value
        this.setState({title: this.state.title})
    }

    handleChangeWord(e, index) {
        this.state.translations[index].word = e.target.value
        this.setState({translations: this.state.translations})
    }

    handleChangeWordTranslation(e, index) {
        this.state.translations[index].wordTranslation = e.target.value
        this.setState({translations: this.state.translations})
    }

    handleRemove(index) {
        this.state.translations.splice(index, 1)
        this.setState({translations: this.state.translations})
    }

    handleSubmit(e) {
        let newArray = [];
        this.state.translations.forEach(item => newArray.push({
            word: item.word,
            wordTranslation: item.wordTranslation,
            imageURL: item.imageURL
        }))
        const data = {
            id:this.state.id,
            title: this.state.title,
            translations: newArray,
            username: this.state.username
        }

        if (this.add === true) {
            var request = require('request');
            var options = {
                'method': 'POST',
                'url': 'http://spectraph-001-site1.itempurl.com/module',
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            };
            request(options, function (error, response) {
                //if (error) throw new Error(error);
                console.log(response.body);
                document.location.href = "/modules";
            });

        } else {
            var request = require('request');
            var options = {
                'method': 'PUT',
                'url': 'http://spectraph-001-site1.itempurl.com/module',
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
                document.location.href = "/modules";
            });
        }
    }

    updateVoiceData = (value, index) => {
        this.state.translations[index].word = value;
        this.setState({translations: this.state.translations})
    }

    updateImageData = (value, index) => {
        this.state.translations[index].imageURL = value;
        this.setState({translations: this.state.translations})
    }

    imageHandler(index) {

        if (this.state.translations[index].imagesIsVisible) {
            this.state.translations[index].imagesIsVisible = false
            this.setState({translations: this.state.translations})
        } else {
            this.state.translations[index].imagesIsVisible = true
            this.setState({translations: this.state.translations})
        }
        console.log(index)
        console.log(this.state.translations[index].imagesIsVisible)
    }


    render() {

        let submitButton;

        if (this.add) {
            submitButton =
                <button id={"addingModuleButton"} className={'button submitButton'} type="submit" onClick={(e) => this.handleSubmit(e)}>Створити</button>
        } else {
            submitButton = <button className={'button submitButton'} type="submit"
                                   onClick={(e) => this.handleSubmit(e)}>Редагувати</button>
        }

        return (
            <div>
                <div className={'header'}>
                    <div><span className={'headerText'}>Створити новий модуль</span></div>
                    <div>
                        {submitButton}
                    </div>
                </div>

                <div className={'titleInputsBlock'}>
                    <div>
                        <input onChange={(e) => this.handleChangeTitle(e)} placeholder={'Введіть назву модулю'}
                               value={this.state.title}/>
                        <br/>
                        <label>Назва</label>
                    </div>
                </div>
                <Transition
                    config={{duration: 300}}
                    items={this.state.translations} keys={(item, index) => index}
                    from={{opacity: 0, margin: '-90px 0 0 0'}}
                    enter={{opacity: 1, margin: '20px 0 0 0'}}
                    leave={{opacity: 0, margin: '-90px 0 0 0'}}>
                    {(item, state, index) => (props =>
                        <div style={props} className={'translationBlock'}>
                            <div className={'translationBlockContainer'}>
                                <div className={'translationBlockInputs'}>
                                    <div className={'translationBlock1'}>
                                        <div>
                                            <input className={"input"} id={'transcript'}
                                                   onChange={(e) => this.handleChangeWord(e, index)}
                                                   value={item.word}
                                                   placeholder={'Ведіть слово'}/>
                                        </div>
                                        <div style={{marginBottom:"25px"}}>
                                            <SpeechRecognition updateData={this.updateVoiceData} index={index}
                                                               lang={"ru-RU"}/>
                                        </div>
                                        <div>
                                            <input className={"input"}
                                                   onChange={(e) => this.handleChangeWordTranslation(e, index)}
                                                   value={item.wordTranslation} placeholder={'Перекласти'}/>
                                        </div>
                                    </div>
                                    <div className={'imageBlock'} onClick={() => this.imageHandler(index)}>
                                        <div>
                                            <img src={imgIcon}/>
                                        </div>
                                        <div><span>Зображення</span></div>
                                    </div>
                                </div>

                                {item.imagesIsVisible &&
                                <ImageSlider param={item.word} index={index}
                                             updateData={this.updateImageData}/>

                                }

                            </div>
                            <img onClick={() => this.handleRemove(index)} className={'removeButton'}
                                 src={minus} style={{marginTop:"30px"}} />

                        </div>)}
                </Transition>
                <img className={'addButton'} onClick={(e) => this.addField(e)} src={plus}/>
            </div>
        )
    }
}
