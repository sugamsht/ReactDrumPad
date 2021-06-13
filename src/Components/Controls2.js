import React from 'react'

export default function Controls2 (props){


    function handleToggleSwitch(){
        props.onBankChange();
    }
    
    
    return (
        <div className="Controls2">
          <div className="Controls2__bank">
            <span>BANK</span>
            <label className="Controls2__switch">
              <input type="checkbox" onChange={handleToggleSwitch} />
              <span className="Controls2__switch__slider" />
            </label>
          </div>
          <div id="display" className="Controls2__display">
            <span className="Controls2__display__text">{props.display}</span>
          </div>
        </div>
      );

}