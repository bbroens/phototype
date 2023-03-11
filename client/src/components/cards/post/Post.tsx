import "./post.scss";
import { useState } from "react";
import Comments from "../../comments/Comments";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

export interface IPost {
  post_id: number;
  name: string;
  datetime: string;
  user_id: number;
  profile_pic: string;
  text: string;
  img: Array<string>;
}

type Props = {
  postObj: IPost;
};

export const Post = ({ postObj }: Props) => {
  //TODO Get images from array
  return (
    <div className="postCard">
      <div className="postContainer">
        <div className="postUser">
          <Link to={`/profile/${postObj.user_id}`}>
            <img src={`/${postObj.profile_pic}`} alt="Profile picture" />
            <span className="name">{postObj.name}</span>
          </Link>
          <span className="timePosted">Posted recently</span>
        </div>
        <div className="postBody">
          <div className="shots">images</div>
          <div className="text">{postObj.text}</div>
        </div>
        <div className="postActions">
          <button className="submitButton">liked?</button>
          <button className="submitButton">
            <CommentIcon />
            Show comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
