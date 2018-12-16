import Fonts from '../components/Fonts.js'
import Layout from '../components/MyLayout.js'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { Button , Collapse } from 'react-bootstrap';
import Link from 'next/link'
import Router from 'next/router'

let paragraph = `
### YouIndex
`

export default class Index extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render () {
  var open = ()=>{
    this.setState({open:!this.state.open})
    Router.push('/listPage')
    console.log('yolo')
  }
  return (
  <div>
    <Head>
      <title>YouIndex</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700,800" rel="stylesheet" />
    </Head>
    <Layout>
      <div className="markdown">
        <Markdown source={paragraph} />
        <input/>
        <Button
          style   = {{ marginLeft: 20 }}
          onClick = {open}
        >Load Transcript
        </Button>
        <Link href={`/about`}><a>haha</a></Link>
      </div>
      <Collapse in={this.state.open} onClick={()=>this.setState({open:!this.state.open})}>
        <div>
          <p>Loading...</p>
        </div>
      </Collapse>

      <style jsx global>{`
     .markdown {
        font-size : 35px;
        text-align: center;
     }

     .markdown a {
       text-decoration: none;
       color          : green;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin : 0;
       padding: 0;
     }
  `}</style>
    </Layout>
  </div>
  )}
}
