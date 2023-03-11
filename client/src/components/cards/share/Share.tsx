import "./share.scss";
import { useContext } from "react";
import AddShotIcon from "@mui/icons-material/AddPhotoAlternate";
import AddLocationIcon from "@mui/icons-material/AddLocationAlt";
import TagIcon from "@mui/icons-material/TagFaces";
import { AuthContext } from "../../../context/authContext";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="shareCard">
      <div className="shareContainer">
        <div className="user">
          <img src={currentUser.icon} alt="Profile picture" />
        </div>
        <div className="content">
          <div className="inputs">
            <input type="text" placeholder="What are you working on?" />
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
