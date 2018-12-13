import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import MinuteTranscript from '../components/MinuteTranscript'
import Head from 'next/head'

import axios from 'axios';


export default class TranscriptLists extends React.Component {

  static async getInitialProps () {
    // res is assigned the response once the axios
    // async get is completed
    const res = await axios.get('https://youtube-index-backend.herokuapp.com/url/pKeynMccbZs')
    // Return properties
    return {data: res.data}
  }
  constructor(props, context) {
    super(props, context);
  }

  render () {
    console.log('heylo', this.props.data[0])
    // Return properties
    return (
      <div>
        <Head>
            <title>League Table</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
        </Head>
        <div className="pure-g">
            <div className="pure-u-1-3"></div>
            <div className="pure-u-1-3">
              <h1>Barclays Premier League</h1>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>P</th>
                  </tr>
                </thead>
                <MinuteTranscript data={this.props.data[0]}/>
              </table>
            </div>
            <div className="pure-u-1-3"></div>
        </div>
      </div>
    );
  }

}
