const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const { SpeechClient } = require('@google-cloud/speech').v1;
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const storageClient = new Storage({
  keyFilename: 'cloude-e:\FSD\exp3\exp3\src\cloude-storage.jsonstorage.json'
});

const bucketName = 'summary-master'; // Replace with your bucket name

const splitAudioIntoSegments = async (audioBuffer) => {
  const audioSegments = [];
  const segmentSize = 16000 * 2; // Assuming 16-bit audio at 16 kHz (1-second segment)

  for (let i = 0; i < audioBuffer.length; i += segmentSize) {
    const segment = audioBuffer.slice(i, i + segmentSize);
    audioSegments.push(segment);
  }

  return audioSegments;
};

const getFileExtension = (filename) => {
  return filename.split('.').pop().toLowerCase();
};

app.post('/upload-audio', upload.single('audioFile'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const bucket = storageClient.bucket(bucketName);
    const fileName = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream();
    blobStream.on('error', (err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to upload file.' });
    });

    blobStream.on('finish', async () => {
      const audioFileURL = `gs://${bucketName}/${fileName}`;
      const client = new SpeechClient({
        keyFilename: 'speech-to-text.json'
      });
      

      const [response] = await client.recognize({
        audio: { uri: audioFileURL },
        config: {
          encoding: 'LINEAR16',
          sampleRateHertz: 16000,
          languageCode: 'en-US',
          enableAutomaticPunctuation: true
        },
      });

      const transcriptions = response.results.map(result => result.alternatives[0].transcript).join('\n');
      res.json({ textContent: transcriptions });

      // Delete the temporary uploaded file
      blob.delete().catch(console.error);
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
