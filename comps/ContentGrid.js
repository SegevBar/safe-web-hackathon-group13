import React from "react";
import ContentCard from "./ContentCard";
import ContentGridContainer from "./ContentGridContainer";

import styles from "../styles/ContentGrid.module.css";

function ContentGrid({ data }) {
  return (
    <ContentGridContainer>
      {data.map((item) => (
        <ContentCard key={item.id} data={item} />
      ))}
    </ContentGridContainer>
  );
}

export default ContentGrid;
