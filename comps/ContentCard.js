import React from "react";
import styles from "../styles/ContentCard.module.css";

// const ContentCard = ({ data }) => {
//   return (
//     <a
//       href={data.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={styles.card} // Apply .card styles
//     >
//       <img src={data.thumbnail} alt={data.title} className={styles.image} /> {/* Apply .image styles */}
//       <div className={styles.info}> {/* Apply .info styles */}
//         <h2 className={styles.title}>{data.title}</h2> {/* Apply .title styles */}
//         <p className={styles.views}>{data.views} views</p> {/* Apply .views styles */}
//       </div>
//     </a>
//   );
// };

// export default ContentCard;

const ContentCard = ({ data }) => {
  return (
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
  );
};

export default ContentCard;
