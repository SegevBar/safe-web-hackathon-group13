
import React from 'react';
import styles from '../styles/ContentGrid.module.css';

const ContentGridContainer = ({ children }) => {
  return <div className={styles.contentgrid}>{children}</div>;
};

export default ContentGridContainer;
