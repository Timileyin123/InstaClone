import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "Timileyin",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQEt5MDiNt8vWQ/profile-displayphoto-shrink_200_200/0/1644694755065?e=1688601600&v=beta&t=IzetEnCrzWIRR0FiLDobRhOY5kkaPR7H2QjOEI35Wpg",
      img: "https://images.unsplash.com/photo-1684638729698-f943a755c16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption: "Nice Picture",
    },
    {
      id: "2",
      username: "Timileyin Olafisoye",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQEt5MDiNt8vWQ/profile-displayphoto-shrink_200_200/0/1644694755065?e=1688601600&v=beta&t=IzetEnCrzWIRR0FiLDobRhOY5kkaPR7H2QjOEI35Wpg",
      img: "https://images.unsplash.com/photo-1634129366530-61d3e56a84fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      caption: "New Picture from Google",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
