import React from 'react';
import './SidebarRow.css';
import HomeIcon from '@mui/icons-material/Home';

export default function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className="sidebarRow_icon" />
      <p>{title}</p>
    </div>
  );
}
