import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { keyset } from "./DataFetcherText";


const RelatedVideos = () => {
  const [videos, setVideos] = useState([]);
  console.log(keyset);
  const handleSearch = async () => {
    // Extract keywords or topics from the input paragraph
    const keywords = keyset // You need to implement this function
    console.log(keywords);
    try {
      // Search for related videos using the extracted keywords
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        
        params: {
          part: 'snippet',
          q: keywords.join(' '), 
          type: 'video',
          key: 'AIzaSyALVM73q7e3p5GJHBzHi55eQRY-mnOvk-Y',
        },
      });
      console.log("hello"+response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
  };
  useEffect(() => {
    handleSearch(); 
  }, [keyset]);
  return (
   <div>
        <center>
      <h2 style={{color:"white",fontSize:'30px',fontWeight:"bold"}}>Content Related Videos :</h2>
      </center><div className="video-gallery">
      {videos.map((video) => (
  <div className="video" key={video.id.videoId}>
    <iframe
      width="110%" 
      height="110%" 
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      title={video.snippet.title}
      frameBorder="0"
      allowFullScreen   
    />
    <h3 className="video-title">{video.snippet.title}</h3>
  </div>
))}
      </div>
    </div>
  );
};

export default RelatedVideos;
