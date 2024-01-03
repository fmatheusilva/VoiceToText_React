import Speak from "../SpeakComponent";
import Writing from "../WritingComponent";

function Body() {
    return (
      <div className="p-5 flex h-3/4 mx-20 justify-around">
        <Writing/>
        <Speak/>
      </div>
    );
}
  
export default Body; 