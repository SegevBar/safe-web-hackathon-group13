import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';

function ContentGrid() {

const videos = [
    {
    url: 'https://www.youtube.com/watch?v=5Zjplzo5YZg',
    title: 'The 7 Habits of Highly Effective People',
    thumbnail: 'https://i.ytimg.com/vi/5Zjplzo5YZg/maxresdefault.jpg',
    views: '1.8M',
    id: 1,
  }, 
  {
    url: 'https://www.youtube.com/watch?v=DBJVj2DLuLA',
    title: 'The 7 Habits of Highly Effective People',
    thumbnail: 'https://i.ytimg.com/vi/5Zjplzo5YZg/maxresdefault.jpg',
    views: '1.8M',
    id: 2,
  },
  {
    url: 'https://www.youtube.com/watch?v=5Zjplzo5YZg',
    title: 'The 7 Habits of Highly Effective People',
    thumbnail: 'https://i.ytimg.com/vi/5Zjplzo5YZg/maxresdefault.jpg',
    views: '1.8M',
    id: 3,
  }];

  return (
    <div className="home-page">
      <h1>Featured Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <ContentCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ContentGrid;
