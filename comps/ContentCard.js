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
  const videoId = getYouTubeVideoId(data.embed);
  return (
    <div>
    <Link href={{pathname: `/contentPage/${videoId}`, query:{url: data.embed}}}
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
      <LikeButton id={data.id} />
      </div>
  );
};

export default ContentCard;