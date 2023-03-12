import "./share.scss";
import AddShotIcon from "@mui/icons-material/AddPhotoAlternate";
import AddLocationIcon from "@mui/icons-material/AddLocationAlt";
import TagIcon from "@mui/icons-material/TagFaces";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const Share = () => {
  const [post, setPost] = useState("");
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="shareCard">
      <div className="shareContainer">
        <div className="user">
          <img src={currentUser.profile_img} alt="Profile picture" />
        </div>
        <div className="content">
          <div className="inputs">
            <input
              type="text"
              placeholder="What are you working on?"
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <div className="attachments">
              <button>
                <AddShotIcon />
                Shot
              </button>
              <button>
                <AddLocationIcon />
                Location
              </button>
              <button>
                <TagIcon />
                Friends
              </button>
            </div>
            <div className="submit">
              <button className="submitButton">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;
