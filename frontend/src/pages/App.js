import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../assets/YouTube.svg';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'https://youtube-index-backend.herokuapp.com',
  headers: {
    'Content-Type'    : 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

class App extends Component {

  constructor (){
    super()
    this.state = {
      videoId: ''
    }
  }

  handleClick = () => {
    console.log(this.state.videoId)

    var getUrl = '/url/' + this.state.videoId
    console.log(getUrl,'sent')
    axios.get(getUrl)
    .then((response) => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}
              style = {{width:300}}
          />
          <p style = {{marginTop:-40}}>
            Enter URL
          </p>
          <div style = {{marginTop:20}}>
          <input type="text"
            onChange = {(input) => this.setState({videoId: input.target.value})}
          />
            <Button
              bsStyle = "success"
              style   = {{marginLeft:20}}
              onClick = {this.handleClick}
            >
              Analyze URL
            </Button>
          </div>
        </header>
      </div>

    );
  }
}

export default App;
