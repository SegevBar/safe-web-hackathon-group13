import React from "react";
import styles from "../styles/ContentCard.module.css";
import Link from "next/link";
import LikeButton from "./LikeButton";

const ContentCard = ({ data }) => {
  function getYouTubeVideoId(url) {
    const regex = /(?:embed\/|v=)([\w-]+)(?:\?|$)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  }
  let hrefVal = data.contentUrl;
  if(data.embed){
    const videoId = getYouTubeVideoId(data.embed);
    hrefVal = {pathname: `/contentPage/${videoId}`, query:{url: data.embed}};
  }
  
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
    <Link href={hrefVal}
      target="_self"
      rel="noopener noreferrer"
      className={styles.card} // Apply .card styles
      >
        <img src={data.imageUrl} alt={data.description} className={styles.image} /> {/* Apply .image styles */}
        <div className={styles.info}> {/* Apply .info styles */}
          <h2 className={styles.description}>{data.description}</h2> {/* Apply .title styles */}
          <p className={styles.views}>{data.views} views</p> {/* Apply .views styles */}
        </div>
      </Link>
      <LikeButton id={data.id} initialLikes={data.likes} />
      </div>
  );
};

export default ContentCard;