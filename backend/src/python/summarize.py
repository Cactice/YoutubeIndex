from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

import sys
import json


def summarize():
    message = sys.stdin.readlines()
    print(message[0])
    jsonMsg = json.loads(message[0])

    TEXT = jsonMsg[0]
    LANGUAGE = jsonMsg[1]
    SENTENCES_COUNT = 1

    parser = PlaintextParser.from_string(TEXT, Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)

    summarizer = Summarizer(stemmer)
    summarizer.stop_words = get_stop_words(LANGUAGE)

    for sentence in summarizer(parser.document, SENTENCES_COUNT):
        print(sentence)


if __name__ == '__main__':
   summarize()
