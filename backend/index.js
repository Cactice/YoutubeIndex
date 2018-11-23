import express from 'express'
import {youtubeTranscript, summarize}from './node_py'
import cors from 'cors'

const port        = 3000
const dynamicPort = process.env.PORT
const app         = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/url/:videoId', (req, res, next) => {

    let videoId = req.params.videoId
    let fetchTranscript = youtubeTranscript(videoId)

    fetchTranscript.then((transcript) => {
        res.send(JSON.stringify(transcript));
        next();
    })   

})

app.get('/summarize/:text/:language', (req, res) => {

    let text = req.params.text
    let language = req.params.language

    let fetchSummary = summarize(text,language)
    fetchSummary.then((summary) => {
        res.send(JSON.stringify(summary));
    })   

})

app.listen(dynamicPort || port, () => console.log(`Example app listening on port ${port}!`))
