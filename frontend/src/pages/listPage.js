import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import MinuteTranscript from '../components/MinuteTranscript'
import Head from 'next/head'
import axios from 'axios';

import { Tab , Col , ListGroup , Row , ListGroupItem } from 'react-bootstrap';

export default class TranscriptLists extends React.Component {

  static async getInitialProps () {
    // res is assigned the response once the axios
    // async get is completed
    const res = await axios.get('https://youtube-index-backend.herokuapp.com/url/IVjmIovOPek')
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
        <div className='tableStyle'>
            {
              this.props.data.map( (each) => {
                return (
                  <center>
                    <MinuteTranscript data={each}/>
                  </center>
                )
              })
            }
        </div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        dafjdk
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        dakflj
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        <style jsx global>{`
          .tableStyle {
              text-align: center;
              padding   : 50px;
          }
        `}</style>
      </div>
    );
  }

}
