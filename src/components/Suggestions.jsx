"use client";
import { useState, useEffect } from "react";
import minifaker from "minifaker";

export default function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);

  const Suggestions = minifaker.array(5, (i) => {
    return {
      id: i,
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      jobTitle: minifaker.jobTitle(),
    };
  });
  //console.log(suggestions);

  useEffect(() => {
    setSuggestion(Suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h1 className="text-gray-400 font-bold">Suggestions</h1>
        <button className="font-semibold text-gray-600">See all</button>
      </div>
      {suggestion.map((suggest) => (
        <div className="flex items-center">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          />
          <div className="ml-4">
            <h2 className="text-sm font-semibold">{suggest.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[230px]">
              {suggest.jobTitle}
            </h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
