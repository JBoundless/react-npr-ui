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
      <img src="https://1000logos.net/wp-content/uploads/2017/07/Font-NPR-Logo.jpg" />
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
