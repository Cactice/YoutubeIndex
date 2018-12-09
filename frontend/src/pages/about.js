import { Panel, PanelGroup, Well, Button , Collapse, Fade} from 'react-bootstrap';
import Head from 'next/head'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: true
    };
  }

  render() {
    return (

    <div>
      <Head>
        <title>YouIndex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700,800" rel="stylesheet" />
      </Head>
    <div>
      <Button onClick={()=>this.setState({open:!this.state.open})}>afsda</Button>
      <Collapse in={this.state.open}>
        <div>
          <p>Content when the button is clicked</p>
        </div>
      </Collapse>
    </div>
  </div>
    );
  }

}
