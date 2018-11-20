var {PythonShell} = require('python-shell');

export default function youtubeTranscript(id){ 
    let pyshell = new PythonShell('./youtube_transcript.py');
    pyshell.send(id);
    let jsonObj

    pyshell.on('message', function (message) {
        jsonObj = message;
    });


    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });

    return new Promise(function(resolve, reject){ 
        setInterval(function() {
            if(typeof jsonObj !== "undefined"){
                resolve(jsonObj)
            }
            else{console.log(jsonObj)}
        }, 300); 
    })
}

