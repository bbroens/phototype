import "./posts.scss";
import { Post, IPost } from "../cards/post/Post";
import { dummyPostFeed } from "../../dummydata";

type Props = {
  filterUserId?: number;
};

//? DUMMY DATA
let postArray: IPost[] = [];
if (import.meta.env.VITE_USE_DUMMY_DATA === "true") {
  postArray = dummyPostFeed;
}

export const Posts = ({ filterUserId }: Props) => {
  const filterPosts = (
    unfilteredPosts: IPost[],
    filterUserId: Props | unknown
  ) => {
    if (filterUserId) {
      return unfilteredPosts.filter((post) => post.user_id === filterUserId);
    }
    return unfilteredPosts;
  };

  return (
    <section>
      {filterPosts(postArray, filterUserId).map((post, index) => (
        <Post key={index} postObj={post} />
      ))}
    </section>
  );
};

export default Posts;
