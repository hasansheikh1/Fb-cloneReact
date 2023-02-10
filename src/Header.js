import { Search } from "@mui/icons-material";
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className="header">
      
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
          alt="kk"
        />

        <div className="header__input">
          <SearchIcon />
          <input type="text"  placeholder="Search Facebook"/>
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option
        header__option--active" >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
    <div className="header__info">
      <Avatar src="https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-thumb.jpg"/>
      <h4>Hasan</h4>
    </div>

    <IconButton>
      <AddIcon/>
    </IconButton>
    <IconButton>
      <ForumIcon/>
    </IconButton>
    <IconButton>
      <NotificationsActiveIcon/>
    </IconButton>
    <IconButton>
      <ExpandMoreIcon/>
    </IconButton>

      </div>
    </div>
  );
}

export default Header;
