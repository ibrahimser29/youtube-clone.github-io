import React from 'react';
import './Search.css';
import ChannelRow from './ChannelRow';
import VideoSearch from './VideoSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import youtube from './youtube.js';
export default function Search() {
  const [videos, setVideos] = useState([]);

  let { search } = useParams();
  const [s, setS] = useState(search);
  useEffect(
    async (search) => {
      const resp = await youtube.get('/search', {
        params: {
          q: s,
        },
      });
      setVideos(resp.data.items);
      console.log(resp.data.items);
    },
    [s]
  );
  const renderVideos = videos.map((video) => {
    return (
      <VideoSearch
        key={video.id.videoId}
        classprop="videoCard_search"
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
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <div>{renderVideos}</div>
    </div>
  );
}
