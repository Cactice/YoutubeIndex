var {PythonShell} = require('python-shell');

export function youtubeTranscript(id){ 
    let pyshell = new PythonShell('./youtube_transcript.py');
    pyshell.send(id);
    let transcriptJson

    pyshell.on('message', function (message) {
        transcriptJson = message;
    });


    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });

    return new Promise(function(resolve, reject){ 
        setInterval(function() {
            if(typeof transcriptJson !== "undefined"){
                resolve(transcriptJson)
            }
            else{console.log(transcriptJson)}
        }, 300); 
    })
}

export function summarize(text,lang){ 
    let pyshell = new PythonShell('./summarize.py');
    let textJson = JSON.stringify([text,lang])
    pyshell.send(textJson);
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

