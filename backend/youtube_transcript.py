import sys
from youtube_transcript_api import YouTubeTranscriptApi
import json

def hello():
    message = sys.stdin.readlines()
    transcript = YouTubeTranscriptApi.get_transcript(message[0])
    return json.dumps(transcript)

    # return message[0]

if __name__ == '__main__':
    print(hello())

