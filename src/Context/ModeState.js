import { useState } from "react";
import ModeContext from "./ModeContext";


const ModeState = (props) => {
    
    const [mode, setMode] = useState('light');
    
    const switchMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }

    return (
        <ModeContext.Provider value={{switchMode, mode }} >
            {props.children}
        </ModeContext.Provider>
    )

}

export default ModeState;