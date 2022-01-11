import React from 'react';
import './VideoRow.css';
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  desc,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt="Remy Sharp" src={image} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noOfVideos} Videos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
