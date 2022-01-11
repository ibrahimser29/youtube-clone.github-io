import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import { useState, useEffect } from 'react';
import youtube from './youtube2.js';

export default function RecommendedVideos() {
  const [videos, setVideos] = useState([]);
  useEffect(async (search) => {
    const resp = await youtube.get('/search', {
      params: {
        q: 'popular lebanon',
      },
    });
    setVideos(resp.data.items);
    console.log(resp.data.items);
  }, []);
  const renderVideos = videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        classprop="videoCard"
        title={video.snippet.title}
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://i.ytimg.com/vi/NZ8OigbGCjs/maxresdefault.jpg"
        channel={video.snippet.channelTitle}
        image={video.snippet.thumbnails.medium.url}
        desc={video.snippet.description}
      />
    );
  });
  return (
    <div className="recommendedvideos">
      <h2>Recommended</h2>
      <div className="recommendedvideos_videos">{renderVideos}</div>
    </div>
  );
}
