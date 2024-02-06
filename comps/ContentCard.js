import React from "react";
import styles from "../styles/ContentCard.module.css";
import LikeButton from "./LikeButton";

const ContentCard = ({ data }) => {
  const handleLike = async () => {
    const response = await fetch('/api/updateLikes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: data.id }),
    });

    if (response.ok) {
      console.log('Like updated successfully');
      // Optionally, trigger a UI update here
    } else {
      console.error('Failed to update like');
    }
  };
  return (
    <div>
    <a
      href={data.contentUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card} // Apply .card styles
    >
        <img src={data.imageUrl} alt={data.description} className={styles.image} /> {/* Apply .image styles */}
      <div className={styles.info}> {/* Apply .info styles */}
        <h2 className={styles.description}>{data.description}</h2> {/* Apply .title styles */}
        <p className={styles.views}>{data.views} views</p> {/* Apply .views styles */}
        
      </div>
    </a>
    <LikeButton id={data.id} />
    </div>
  );
};

export default ContentCard;