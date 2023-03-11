import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { dummyComments } from "../../dummydata";
export interface IComments {
  id: number;
  desc: string;
  name: string;
  user_id: number;
  profile_pic: string;
}

//? DUMMY DATA
let commentArray: IComments[];
if (import.meta.env.VITE_USE_DUMMY_DATA === "true") {
  commentArray = dummyComments;
}

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="comments">
      <div className="write">
        <img src={`/${currentUser.icon}`} alt="" />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>

      {commentArray.map((comment, index) => (
        <div key={index} className="comment">
          <img src={`/${comment.profile_pic}`} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">2 hours ago</span>
        </div>
      ))}
    </section>
  );
};

export default Comments;
