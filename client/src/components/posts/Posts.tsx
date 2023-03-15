/* eslint-disable indent */
import React from "react";
import "./posts.scss";
import { Post } from "../cards/post/Post";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";

type Post = {
  post_id: number;
  user_id: number;
  created_at: string;
  text: string;
  img: string;
}[];

type PostsProps = {
  filterUserId?: number;
};

export const Posts = ({ filterUserId }: PostsProps) => {
  // Get posts from api
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?user_id=${filterUserId}`).then((res) => {
      return res.data;
    })
  );

  // Returns either all posts, or only posts made by a defined user.
  const filterPosts = (
    unfilteredPosts: Post,
    filterUserId: PostsProps | unknown
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
