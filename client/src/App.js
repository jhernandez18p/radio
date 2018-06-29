import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <h3 className="is-size-5">
                Radio vida Panamá
              </h3>
              <div className="player">
                <audio controls>
                  <source src="http://200.115.160.109:8000" type="audio/ogg"></source>
                  <source src="http://200.115.160.109:8000" type="audio/mpeg"></source>
                  Your browser does not support the audio element.
                  </audio>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
