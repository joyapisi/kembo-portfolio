import React from 'react';

const Thumbnail = ({ video }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        alt="thumbnail"
        className="object-cover object-center w-full h-full"
        src={video.thumbnail}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Play button or other play icon */}
        <button className="text-white">
          {/* You can customize the play icon here */}
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Thumbnail;
