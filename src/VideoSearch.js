import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';
export default function VideoSearch({
  classprop,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  desc,
}) {
  return (
    <div className={classprop}>
      <img className="videoCard_thumb" src={image} alt="" />
      <div className="videoCard_info">
        <h4>{title}</h4>
        <div class="video_text">
        <p>
            {' '}
            {views} . {timestamp}{' '}
          </p>
      
          
        </div>
        <div class="channel">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <p>{channel}</p>
        </div>
        <p className="desc">{desc}</p>
        
      </div>
    </div>
  );
}
