import React from 'react';

function ContentCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h2>{video.title}</h2>
        <p>{video.views} views</p>
      </div>
    </div>
  );
}

export default ContentCard;
