import React from 'react'

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playAudio() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.volume = this.props.clipVol / 100;
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay(this.props.clipId);
    // this.props.updateBorder(this.props.clipColor);
    this.changeColor();
  }

  handleKeyPress(e) {
    if (!this.props.power) return;
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();
    }
  }

  changeColor() {
    const currentDrum = document.getElementById(this.props.clipId);
    currentDrum.style.background = this.props.clipColor;
    currentDrum.style.boxShadow = "inset 1px 1px 1px #000000";
    setTimeout(() => {
      currentDrum.style.background = "white";
      currentDrum.style.boxShadow =
        "inset 0 -0.5em 0 -0.35em rgba(0, 0, 0, 0.17)";
    }, 800);
  }

  render() {
    return (
      <div
        id={this.props.clipId}
        className="DrumPad drum-pad"
        onClick={this.playAudio}
      >
        <span className="DrumPad__text">{this.props.keyTrigger}</span>
        <audio
          id={this.props.keyTrigger}
          className="DrumPad__audio clip"
          src={this.props.clipUrl}
        ></audio>
      </div>
    );
  }
}

export default DrumPad