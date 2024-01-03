import { FaMicrophoneSlash } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import "./Speak.css";
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function Speak()
{
    const {
        listening,
      } = useSpeechRecognition();
    
    
    const HandlerListening = () => {
        if(!listening)
            SpeechRecognition.startListening({continuous: true, language: 'en-US'})
        else
            SpeechRecognition.stopListening();
    }
    return (
        <div className="bg-gray-900 w-2/5 text-white flex justify-center items-center flex-col gap-5">
            <p className="Mic" onClick={HandlerListening}>
                {
                    listening ? <FaMicrophone /> : <FaMicrophoneSlash />
                }
            </p>
            <p className="text-2xl select-none">
                {
                    listening ? "Disable Microphone": "Enable Microphone"
                }
            </p>
        </div> 
    ); 
} 

export default Speak;