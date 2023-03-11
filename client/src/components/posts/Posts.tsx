import "./posts.scss";
import { Post, IPost } from "../cards/post/Post";

type Props = {
  filterUserId?: number;
};

// DUMMY DATA
const postArray: IPost[] = [
  {
    post_id: 1,
    name: "Jasper Kaehler",
    datetime: "2023-02-27 20:14:17",
    user_id: 3,
    profile_pic: "i3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: ["i5.jpg"],
  },
];

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
