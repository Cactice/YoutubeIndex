import express from 'express'
import {renderTranscript, renderSummary} from './src/render.js'
import cors from 'cors'

const port        = 3000
const dynamicPort = process.env.PORT
const app         = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/url/:videoId',renderTranscript)

app.get('/summarize/:text/:language',renderSummary)

app.listen(dynamicPort || port, () => console.log(`Example app listening on port ${port}!`))
