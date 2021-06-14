import '../App.scss';
import React from 'react'
import {useState} from 'react'
import Controls from '../Components/Controls'
import Controls2 from '../Components/Controls2.js'
import PadBank from '../Components/PadBank'
import { bankOne, bankTwo} from '../Components/Sounds'



export default function App (){
    const [power,setPower] = useState(true);
    const[display,setDisplay] = useState('');
    const[currentBank,setCurrentBank] = useState(bankOne);
    const[volume,setVolume] = useState(50);

   function handlePowerChange() {
      setPower(prevPower => !prevPower)
    }

    function handleDisplayChange(id) {
      if (power) {
        setDisplay(id);
        setTimeout(() => {
          setDisplay("");
        }, 1500);
      }
    }

    function handleBankChange(){
        if (currentBank===bankOne)
        setCurrentBank(bankTwo)
        else
        setCurrentBank(bankOne)

      console.log(currentBank)
    }

    const handleVolumeChange = (newValue) => {
      setVolume(newValue);
    };

    return (
          <div id="drum-machine" className="App">
            {/* <Logo name="Drum Machine" /> */}
            <Controls
              power={power}
              volume={volume}
              onPowerChange={handlePowerChange}
              onVolumeChange={handleVolumeChange}
            />
            <Controls2
              onBankChange={handleBankChange}
              display={display}
            />
            <PadBank
              power={power}
              updateDisplay={handleDisplayChange}
              currentBank={currentBank}
              clipVol={volume}
            />
          </div>

    )
}

