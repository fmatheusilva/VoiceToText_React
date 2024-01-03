import { IoMdDownload } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { useState} from "react";
import { useSpeechRecognition } from 'react-speech-recognition';

function MoreActions() {

    const [active, setActive] = useState(false);
    const {
        transcript
      } = useSpeechRecognition();

    function activeMoreAction() {
        setActive(!active);
    }

    function copy() {
        navigator.clipboard.writeText(transcript);
    }

    function download() {
        const element = document.createElement("a");
        const file = new Blob([transcript], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "transcript.txt";
        document.body.appendChild(element); 
        element.click();
    }

    return (
        <>
            <IoIosMore className="cursor-pointer text-3xl hover:bg-slate-700 z-50" onClick={activeMoreAction}/>
            {
                active && (
                    <div className="bg-slate-800 absolute top-9 -right-[4.5rem]">
                        <ul>
                            <li className="flex items-center gap-2 p-2 hover:bg-slate-700 cursor-pointer select-none" onClick={download}>
                                <IoMdDownload />
                                <span>Download</span>
                            </li>
                            <li className="flex items-center gap-2 p-2 hover:bg-slate-700 cursor-pointer select-none" onClick={copy}>
                                <FaCopy/>
                                <span>Copy</span>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    );
}
export default MoreActions;