
import React from 'react'
import {FaPowerOff, FaVolumeUp} from 'react-icons/fa'

export default function Controls (props){

   function handleClick() {
        props.onPowerChange();
      }
    
     function handleInput(e) {
        props.onVolumeChange(e.target.value);
      }

      const powerStyle = props.power
      ? {
          color: "#3BFF14"
        }
      : {
          color: "red"
        };
      return(
          <div className='Controls'>
                <div className="Controls__power" onClick={handleClick}> 
                    <FaPowerOff style={powerStyle}>
                      
                    </FaPowerOff>
                </div>
            <div className="Controls__volume">
            <input
              type="range"
              value={props.volume}
              onInput={handleInput}
            />     
                <FaVolumeUp />     
          </div>
        </div>  
      );

}