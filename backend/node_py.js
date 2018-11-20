var {PythonShell} = require('python-shell');
var pyshell = new PythonShell('./youtube_transcript.py');

export default function youtubeTranscript(id){ 
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
    console.log(jsonObj)
  });

    return jsonObj
}

