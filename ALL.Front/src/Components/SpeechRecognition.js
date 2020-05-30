import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import microphone from "../img/microphone.png";

function SpeechRecognition (props) {
    const [lang, setLang] = useState(props.lang);
    const [value, setValue] = useState('');
    const [blocked, setBlocked] = useState(false);

    const onEnd = () => {

    };

    const onResult = (result) => {
        setValue(result);
        props.updateData(result, props.index);
    };

    const onError = (event) => {
        if (event.error === 'not-allowed') {
            setBlocked(true);
        }
    };

    const {
        listen,
        listening,
        stop,
        supported
    } = useSpeechRecognition({ onResult, onEnd, onError });

    const toggle = listening
        ? stop
        : () => {
            setBlocked(false);
            listen({ lang });
        };

    return (
            <img src={microphone} disabled={blocked} type="button" onClick={toggle} height={'20px'} width={'20px'}/>

    );
};

export default SpeechRecognition;