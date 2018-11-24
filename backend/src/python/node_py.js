var {PythonShell} = require('python-shell');
import path from 'path'

export function youtubeTranscript(id){
    let pythonPath = path.join(__dirname, 'youtube_transcript.py')

    return fetchPythonResult(id, pythonPath)
}

export function summarize(text,lang='english'){
    let pythonPath = path.join(__dirname, '/summarize.py')
    let jsonObj    = JSON.stringify([text,lang])

    return fetchPythonResult(jsonObj, pythonPath)
}

function fetchPythonResult(data, pythonPath){
    let pyshell = new PythonShell(pythonPath);
    pyshell.send(data);
    let summary

    pyshell.on('message', function (message) {
        summary = message;
    });

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });

    return new Promise(function(resolve, reject){
        setInterval(function() {
            if(typeof summary !== "undefined"){
                resolve(summary)
            }
            else{console.log(summary)}
        }, 300);
    })
}