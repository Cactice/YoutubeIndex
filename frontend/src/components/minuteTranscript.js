import React from 'react';
import { Button , Collapse } from 'react-bootstrap';
import Head from 'next/head'
import axios from 'axios';

export default class MinuteTranscript extends React.Component {
  constructor(props) {
      super(props);
      this.state     = {summary : 'Waiting'  }
      this.summarize = this.summarize.bind(this);
  }

  async summarize(transcript){
    let summaryString = this.props.data.map(function(eachLine){
        return eachLine.text;
    }).join('. ');

    let summarySentences = summaryString
    console.log('sentence: ',summarySentences)
    const url = 'https://youtube-index-backend.herokuapp.com/summarize/'+ encodeURI(summarySentences) + '/english'
    console.log(url)
    const res = await axios.get(url)
    this.setState({summary:res.data})
  }
  render() {
      console.log('ponpon',this.props.data)
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <table className="minuteTranscript">
          <thead>
            <tr>
              <th>Position</th>
              <th>Transcript</th>
            </tr>
          </thead>
                <tr>
                <td>
                  <Button onClick={this.summarize}>
                    Summarize
                  </Button>
                </td>
                <td>{this.state.summary}
                </td>
                </tr>
          <tbody>
            {this.props.data.map((each, i) => {
              return (
                <tr key={i}>
                <td>{each.startSeconds}</td>
                <td>{each.text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <style jsx global>{`
          .minuteTranscript {
              padding: 20px;
          }
        `}</style>
      </div>
    )
  }
}
