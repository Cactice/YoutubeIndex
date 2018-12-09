import { join } from "path";
import _ from 'lodash'
export default function formatTranscript(transcript){
    transcript.map((each) => {
        each.startMinutes = Math.floor(each.start/60)
        each.startSeconds = Math.floor(each.start%60)
        return each
    })
    grouped = _.groupBy(transcript, 'startMinutes')
    return grouped
}