const express     = require('express')
const app         = express()
const port        = 3000
const dynamicPort = process.env.PORT
//const youtubeTranscript = require('./node_py')
import youtubeTranscript from './node_py'
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/url/:videoId', (req, res) => {
    let videoId = req.param('videoId')
    let transcript = youtubeTranscript(videoId)
    transcript.then((result) => {
        console.log('ponyo',result,'ponyo')
        res.send(JSON.stringify(result));
    })   
})

app.listen(dynamicPort || port, () => console.log(`Example app listening on port ${port}!`))
