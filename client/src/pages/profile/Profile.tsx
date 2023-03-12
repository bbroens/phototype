import React from "react";
import "./profile.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img src={`/${currentUser.cover_img}`} alt="" className="cover" />
        <img
          src={`/${currentUser.profile_img}`}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>User feed</span>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts filterUserId={currentUser.user_id} />
      </div>
    </div>
  );
};

export default Profile;
