import React from 'react'
import DrumPad from '../Container/DrumPad';
import {colors} from './Sounds'

export default function PadBank(props) {
    let padBank = props.currentBank.map((bankObj, i) => {
      return (
        <DrumPad
          keyCode={bankObj.keyCode}
          keyTrigger={bankObj.keyTrigger}
          clipId={bankObj.id}
          clipUrl={bankObj.url}
          clipColor={colors[i]}
          clipVol={props.clipVol}
          power={props.power}
          updateDisplay={props.updateDisplay}
        />
      );
    });
    return <div className="PadBank">{padBank}</div>;
  }