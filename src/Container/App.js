import '../App.scss';
import React from 'react'
import {useState, useEffect} from 'react'
// import Border from '../Components/Border';
import Controls from '../Components/Controls'
import Controls2 from '../Components/Controls2.js'
import PadBank from '../Components/PadBank'
import { bankOne, bankTwo} from '../Components/Sounds'



export default function App (){
    const [power,setPower] = useState(true);
    const[display,setDisplay] = useState('');
    const[currentBank,setCurrentBank] = useState(bankOne);
    const[volume,setVolume] = useState(10);
    // const[borderColor,setBorderColor] = useState()

   function handlePowerChange() {
      setPower(prevPower => !prevPower)
      console.log(power)
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

    // function handleVolumeChange(vol) {
    //   setVolume(vol);
    // }

    const handleVolumeChange = (newValue) => {
      setVolume(newValue);
    };

    return (
        // <Border borderColor={borderColor}>
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
              // updateBorder={handleBorderChange}
            />
          </div>
        // </Border>
    )
}

