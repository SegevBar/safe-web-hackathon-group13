import React from "react";
import ContentCard from "./ContentCard";
import ContentGridContainer from "./ContentGridContainer";

import styles from "../styles/ContentGrid.module.css";

// function ContentGrid({ data }) {
//   return (
//     <ContentGridContainer>
//       {data.map((item) => (
//         <ContentCard key={item.id} data={item} />
//       ))}
//     </ContentGridContainer>
//   );
// }

// export default ContentGrid;

function ContentGrid({ data = [] }) { // Default to an empty array if data is undefined
  return (
    <ContentGridContainer>
      {data.length > 0 ? (
        data.map((item) => (
          <ContentCard key={item.id} data={item} />
        ))
      ) : (
        <div>No content available</div> // Fallback UI when there's no data
      )}
    </ContentGridContainer>
  );
}

export default ContentGrid;