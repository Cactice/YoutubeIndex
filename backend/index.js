import express from 'express'
import youtubeTranscript from './node_py'
import cors from 'cors'

const port        = 3000
const dynamicPort = process.env.PORT
const app         = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/url/:videoId', (req, res, next) => {
    let videoId = req.params.videoId
    let transcript = youtubeTranscript(videoId)
    transcript.then((result) => {
        res.send(JSON.stringify(result));
        next();
    })   
})

app.listen(dynamicPort || port, () => console.log(`Example app listening on port ${port}!`))
