import {youtubeTranscript, summarize} from './node_py'

it('renderTranscript should return proper transcript', () => {
    let fetchTranscript = youtubeTranscript('59bMh59JQDo')
    let expectation     = "let's play a game close your eyes and"

    expect.assertions(1);
    return fetchTranscript.then((transcriptJSON) => {
        let transcript          = JSON.parse(transcriptJSON)
        let transcriptFirstLine = transcript[0].text
        expect(transcriptFirstLine).toEqual(expectation)
    })
})


it('summarize is not returning expectation', () => {
    let fetchSummary = summarize(`
        Now imagine that you're trying to
        teach a computer to recognize a shoe. you
        may end up exposing it to your own bias.
        that's how bias happens in machine
        learning but first what is machine
        learning?
    `
    ,'english')
    let expectation = `Now imagine that you're trying to teach a computer to recognize a shoe.`
    expect.assertions(1);
    return fetchSummary.then((summary) => {
        expect(summary).toEqual(expectation)
    })
})
