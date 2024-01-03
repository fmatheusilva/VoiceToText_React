import { FaGlobeAmericas } from "react-icons/fa";
import './Header.css';
import { languagesData } from "../../utils/languages";
import { useState } from "react";

function Header() {

  const [language, setLanguage] = useState("");

  function defineLanguage(value)
  {
    setLanguage(value);
    console.log(language);
  }

  return (
    <div className="p-5 text-center">
        <header className="mx-20 flex justify-center">
          <div className="flex flex-nowrap flex-row h-full w-full select-none">
            {/* div 1 */}
            <div className="flex-1">
              
            </div>
            {/* div 2 */}
            <h1 className="text-4xl font-bold text-white flex-1">
                  I SPEAK 
                  <p className="text-base">AND</p>
                  YOU WRITE
              </h1>
            {/* div 3 */}
            <div className="text-white  w-10 flex-1 flex items-center justify-around">
                <div className="flex flex-row items-center justify-around gap-5 select-none">
                  <select name="" id="" className="text-black">
                    <option value="">Select your Language</option>
                    {languagesData.Languages.map((language, index) => {
                      return (
                        <option key={index} value={Object.values[index]}>{Object.keys(language)}</option>
                      )
                    })}
                  </select>
                  <span className="globe"><FaGlobeAmericas/></span>
                </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header; 