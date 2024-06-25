import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 border w-72 h-[350px] shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// HigherOrder component use to chnages in the cards

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-950">
      <VideoCard info={info} />;
    </div>
  );
};

export default VideoCard;
