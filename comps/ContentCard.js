import React from "react";

const ContentCard = ({ data }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    marginBottom: "20px",
    minHeight: "280px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderBottom: "1px solid #ddd",
  };

  const videoInfoStyle = {
    padding: "10px",
  };

  const titleStyle = {
    margin: "0",
    fontSize: "16px",
  };

  const viewsStyle = {
    margin: "5px 0",
    fontSize: "14px",
  };

  const hoverEffectStyle = {
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      style={cardStyle}
    >
      <img src={data.thumbnail} alt={data.title} style={imgStyle} />
      <div style={videoInfoStyle}>
        <h2 style={titleStyle}>{data.title}</h2>
        <p style={viewsStyle}>{data.views} views</p>
      </div>
    </a>
  );
};

export default ContentCard;
