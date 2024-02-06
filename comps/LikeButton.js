import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p>{likes} Likes</p>
      <button onClick={handleLikeClick}>Like</button>
    </div>
  );
};

export default LikeButton;