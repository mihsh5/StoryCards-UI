import React from "react";
import Card from "./Card";

function Stories(props) {
  const { stories } = props;
  return (
    <div className="flex-row-container flex-wrap">
      {stories.map(story => {
        return <Card {...story} />;
      })}
    </div>
  );
}

export default Stories;
