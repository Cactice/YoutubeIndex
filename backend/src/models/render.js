import {youtubeTranscript, summarize} from '../python/node_py'
import './formatTranscript'
import formatTranscript from './formatTranscript';
export const renderTranscript = (req, res) => {
    let videoId         = req.params.videoId
    let fetchTranscript = youtubeTranscript(videoId)

    fetchTranscript.then((transcript) => {
        transcript = formatTranscript(JSON.parse(transcript))
        res.send(JSON.stringify(transcript));
    })
}

export const renderSummary = (req, res) => {
    let text     = req.params.text
    let language = req.params.language

    let fetchSummary = summarize(text,language)
    fetchSummary.then((summary) => {
        res.send(JSON.stringify(summary));
    })
}
