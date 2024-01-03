import MoreActions from "../MoreActionsComponent";
import { useSpeechRecognition } from 'react-speech-recognition';
import './Writing.css'
import { GrPowerReset } from "react-icons/gr";

function Writing(){
    const {
        transcript,
        resetTranscript
      } = useSpeechRecognition();

    return(
        <div className="bg-gray-900 w-2/5 text-gray-300 relative">
            <div className="flex justify-end relative p-2">
                <MoreActions />
            </div>
            <div className="scroll overflow-y-scroll w-full text-justify h-5/6 overflow-x-none flex">
                <p className="mx-2">
                    { transcript }
                </p>
            </div>  

            <button  className="w-full bg-red-800 h-10 hover:" onClick={resetTranscript}>CLEAR</button>
        </div>
    )
}

export default Writing;