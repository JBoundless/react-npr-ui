import React, {Component} from "react";
import "./style.css";
import MusicPlayer from './Components/MusicPlayer.js';
import ShowCards from './Components/ShowCards.js';
import AppBar from './Components/AppBar.js';

class App extends Component {
  render() {
      return (
    <div>
      <AppBar />
      <img src="https://media.npr.org/assets/img/2019/06/17/nprlogo_rgb_whiteborder_custom-7c06f2837fb5d2e65e44de702968d1fdce0ce748-s800-c85.png" style={{width: "25%", height: "100%"}} />
      <h1>Listen Live to NPR</h1>
      <p>Click on the live feed to listen to all NPR programs.</p>
      <h2>Now Playing</h2>
      <MusicPlayer />
      <h2>You May Also Enjoy...</h2>
      <ShowCards />
    </div>
  );
}
}


export default App;