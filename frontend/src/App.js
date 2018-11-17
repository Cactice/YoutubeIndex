import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import logo from './YouTube.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}
          style={{width:300}}/>
          <p style = {{marginTop:-40}}>
            Enter URL
          </p>
          <div style = {{marginTop:20}}>
          <input type="text" />
            <Button bsStyle="success" style = {{marginLeft:20}}>
              Analyze URL
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
