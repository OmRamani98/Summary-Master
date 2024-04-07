# Summary Master

Summary Master is a powerful web application designed to help users summarize text, analyze YouTube videos, and extract transcripts from audio and video files. It provides various features such as user authentication, history tracking, and more.

## Features

### Add Text
- Input text directly into the application for summarization.
- Summarize text of any length with ease.

### Add URL
- Paste YouTube video URLs to extract transcripts and analyze video content.
- View embedded videos and their details within the application.

### Add File
- Upload and summarize text documents (.txt) and docx documents (.docx).
- Upload audio or video files (e.g., .mp3, .mp4) to extract transcripts and analyze content.

### Summarize
- Click the "Summarize" button to generate a summary of input text, video, or audio.
- Adjust the length of the summary using a range slider.

### User Authentication
- Secure user authentication using Firebase Authentication.
- Supports login, registration, and Google authentication for ease of access.

### History
- Track user activities and view a history of previously summarized text, URLs, and files.
- Easily revisit past summaries and analyze them further.

### Browser Extension
- A browser extension seamlessly integrates with the application to provide additional functionality.
- Enhance your browsing experience with quick access to summarization features.

### Email Notification
- Node.js server sends email notifications when users submit the contact us form.
- Stay informed about user interactions and engage with users effectively.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Flask
- **Node.js**: Utilized for specific tasks such as extracting transcripts from audio and video files.
- **Authentication**: Firebase Authentication for secure user authentication.
- **Transcript Extraction (YouTube)**: Leveraged `youtube_transcript_api` for extracting transcripts.
- **Transcript Extraction (Audio/Video Files)**: Utilized `moviepy` or `ffmpeg` for extracting transcripts from audio and video files.
- **Summarization**: Employed Natural Language Processing (NLP) libraries such as NLTK for summarization tasks.
- **Email Notification**: Node.js combined with an email sending library (e.g., Nodemailer) for sending email notifications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/summary-master.git
   cd summary-master
