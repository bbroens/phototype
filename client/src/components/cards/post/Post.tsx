import React from "react";
import "./post.scss";
import { useState } from "react";
import Comments from "../../comments/Comments";
import FavoriteOutlineIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
export interface IPost {
  post_id: number;
  user_id: number;
  created_at: string;
  text: string;
  img: string;
}

type Props = {
  postObj: any;
};

export const Post = ({ postObj }: Props) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const imageArray = postObj.img.split(", ");
  const liked = false;

  // Return either collage or a single wide photo
  const processedImages = (images: Array<string>) => {
    if (images.length > 1) {
      return (
        <div className="collage">
          {images.map((image, index) => (
            <div key={index} className="collage-photo">
              <img alt="Photo" src={`/${image}`} />
            </div>
          ))}
        </div>
      );
    }
    return <img src={`/${images[0]}`} alt="Photograph" />;
  };

  return (
    <div className="postCard">
      <div className="postContainer">
        <div className="postUser">
          <Link to={`/profile/${postObj.user_id}`}>
            <img src={`/${postObj.profile_img}`} alt="Profile picture" />
            <span className="name">
              {`${postObj.firstname} ${postObj.lastname}`}
            </span>
          </Link>
          <span className="timePosted">Posted recently</span>
        </div>
        <div className="postBody">
          <div className="shots">{processedImages(imageArray)}</div>
          <div className="text">{postObj.text}</div>
        </div>
        <div className="postActions">
          <button className="submitButton">
            {liked ? (
              <>
                <FavoriteIcon /> Unlike
              </>
            ) : (
              <>
                <FavoriteOutlineIcon /> Like
              </>
            )}
          </button>
          <button
            className="submitButton"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <CommentIcon />
            {commentOpen ? "Hide comments" : "Show comments"}
          </button>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
