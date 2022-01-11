import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';
export default function VideoCard({
  classprop,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumb" src={image} alt="" />
      <div className="videoCard_info">
        
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {' '}
            {views} . {timestamp}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
