import React, { useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import styles from "../styles/LikeButton.module.css";



const LikeButton = ({id}) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
    console.log("id", id);
    const handleLike = async () => {
      const response = await fetch('/api/updateLikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
  
      if (response.ok) {
        console.log('Like updated successfully');
        // Optionally, trigger a UI update here
      } else {
        console.error('Failed to update like');
      }
    };
    handleLike();

  };

  return (
    <div className={styles.likebutton}>
      <button className={styles.likebtn} onClick={handleLike}>{liked ? <AiFillLike /> : <AiOutlineLike />}</button>
      <span className={styles.likecount}>Likes: {likeCount}</span>
    </div>
  );
};

export default LikeButton;
