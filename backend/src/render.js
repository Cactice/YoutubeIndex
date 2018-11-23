import {youtubeTranscript, summarize} from './python/node_py'

export const renderTranscript = (req, res) => {
    let videoId = req.params.videoId
    let fetchTranscript = youtubeTranscript(videoId)

    fetchTranscript.then((transcript) => {
        res.send(JSON.stringify(transcript));
    })   
}

export const renderSummary = (req, res) => {

    console.log('heloo')
    let text = req.params.text
    let language = req.params.language

    let fetchSummary = summarize(text,language)
    fetchSummary.then((summary) => {
        res.send(JSON.stringify(summary));
    })   
}
