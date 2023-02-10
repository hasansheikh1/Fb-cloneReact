import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow"
function Sidebar() {
  return (
    <div className='sidebar'>
          <SidebarRow src='https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-thumb.jpg' title="Hasan Sheikh"/>
          <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
          <SidebarRow Icon={EmojiFlags} title="Pages" />
          <SidebarRow Icon={People} title="Friends"/>
          <SidebarRow Icon={Chat} title="Messenger"/>
          <SidebarRow Icon={Storefront} title="Marketplace"/>
          <SidebarRow Icon={VideoLibrary} title="Videos"/>
          <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
}

export default Sidebar;