import React from "react";
import "./styles.css";

function Card(props) {
  const storyHeading = props.heading;
  const storyImageUrl = props.imageUrl;
  const storyDescription = props.storyDescription;
  const storyLink = props.storyLink;
  const storyLinkDescription = props.storyLinkDescription;

  return (
    <div className="card flex-item-0 flex-column-container m-10">
      <img src={storyImageUrl} alt="Story" className="card-img flex-item-0" />
      <h3 className="story-title">{storyHeading}</h3>
      <p className="story-description flex-item-1">{storyDescription}</p>
      <a
        href={storyLink}
        class="story-nav-btn story-nav-btn--grey story-nav-btn--text-center p-t-b-5 flex-item-0"
      >
        {storyLinkDescription}
      </a>
    </div>
  );
}

export default Card;
