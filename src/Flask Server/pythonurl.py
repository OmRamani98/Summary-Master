from flask import Flask, request, jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
import spacy

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/getTranscript', methods=['POST', 'OPTIONS'])
def get_transcript():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        return jsonify({'status': 'ok'}), 200
    
    try:
        data = request.get_json()
        youtube_url = data.get('youtubeUrl', '')
        print('Received YouTube URL:', youtube_url)

        transcript = YouTubeTranscriptApi.get_transcript(youtube_url)
        transcript_text = ' '.join(entry['text'] for entry in transcript)

        nlp = spacy.load("en_core_web_sm")
        doc = nlp(transcript_text)

        sentences = []
        current_sentence = ""
        for token in doc:
            if token.is_sent_start:
                # start a new sentence
                sentences.append(current_sentence.strip() + ".")
                current_sentence = token.text
            else:
                # continue the current sentence
                current_sentence += token.text_with_ws
        # add the last sentence
        sentences.append(current_sentence.strip() + ".")
        final = " ".join(sentences)

        return jsonify({'transcript': final})

    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Failed to get transcript'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
