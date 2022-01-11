import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';
function Header() {
  const [search, setSearch] = useState('');
  return (
    <div className="header">
      <div className="header_left ">
        <MenuIcon />
        <div className="header_logo">
          <Link to="/">
            <YouTubeIcon className="logo" />
            <p>YouTube</p>
          </Link>
        </div>
      </div>
      <div className="header_input">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`search/${search}`}>
          <SearchIcon className="header_inputbtn" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          class="header_avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
}
export default Header;
