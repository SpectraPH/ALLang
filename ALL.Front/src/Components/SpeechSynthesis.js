import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import speaker from "../img/speaker.png"

export default function SpeechSynthesis(props) {
    const { speak } = useSpeechSynthesis();

    const style = {
        height:'30px',
        width:'30px',
        padding:'5px',
        border:'1px solid #797979',
        borderRadius:'8px',
        backgroundColor:'#88DBFF'
    }

    return (
            <img className={"speakButton"} src={speaker} style={style} onClick={() => speak({ text: props.text })}/>
    );
}