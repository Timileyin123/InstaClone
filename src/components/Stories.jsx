"use client";
import { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  const stories = minifaker.array(20, (i) => {
    return {
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    };
  });

  useEffect(() => {
    setStoryUsers(stories);
    // console.log(stories);
  }, []);
  return (
    <div className="stories flex space-x-2 p-7 bg-white mt-8 border-gray-200 border">
      {storyUsers.map((storyUser) => {
        return (
          <Story
            key={storyUser.id}
            img={storyUser.img}
            username={storyUser.username}
          />
        );
      })}
    </div>
  );
}
