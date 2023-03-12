/* eslint-disable indent */
import React from "react";
import "./posts.scss";
import { Post, IPost } from "../cards/post/Post";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";

type Props = {
  filterUserId?: number;
};

export const Posts = ({ filterUserId }: Props) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?user_id=${filterUserId}`).then((res) => {
      return res.data;
    })
  );

  // Returns either all posts, or only posts made by a defined user.
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
      {error
        ? "Something went wrong fetching posts."
        : isLoading
        ? "loading posts..."
        : filterPosts(data, filterUserId).map((post, index) => (
            <Post key={index} postObj={post} />
          ))}
    </section>
  );
};

export default Posts;
