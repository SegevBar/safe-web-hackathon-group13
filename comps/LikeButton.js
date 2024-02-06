import React, { useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import styles from "../styles/LikeButton.module.css";


const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
        setLikeCount(likeCount + 1);
        setLiked(true);
      } else {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
  };

  return (
    <div className={styles.likebutton}>
      <button className={styles.likebtn} onClick={handleLike}>{liked ? <AiFillLike /> : <AiOutlineLike />}</button>
      <span className={styles.likecount}>Likes: {likeCount}</span>
    </div>
  );
};

export default LikeButton;
