import React, { Component } from "react";
import Stories from "./Stories";

class StoryCards extends Component {
  state = {
    stories: [
      {
        imageUrl: "https://quackit.com/pix/samples/23m.jpg",
        heading: "Seamlessly visualize quality",
        storyDescription:
          "Collaboratively administrate empowered markets via plug-and-play networks.",
        storyLinkDescription: "Here's why",
        storyLink: "#"
      },
      {
        imageUrl: "https://quackit.com/pix/samples/24m.jpg",
        heading: "Completely Synergize",
        storyDescription:
          "Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
        storyLinkDescription: "Here's how",
        storyLink: "#"
      },
      {
        imageUrl: "https://quackit.com/pix/samples/22l.jpg",
        heading: "Dynamically Procrastinate",
        storyDescription:
          "Completely synergize resource taxing relationships via premier niche markets.",
        storyLinkDescription: "Read more",
        storyLink: "#"
      },
      {
        imageUrl: "https://quackit.com/pix/samples/15l.jpg",
        heading: "Best in class",
        storyDescription:
          "Imagine jumping into that boat, and just letting it sail wherever the wind takes you...",
        storyLinkDescription: "Just do it!",
        storyLink: "#"
      },
      {
        imageUrl: "https://quackit.com/pix/samples/25m.jpg",
        heading: "Dynamically innovate supply chains",
        storyDescription:
          "Holisticly predominate extensible testing procedures for reliable supply chains.",
        storyLinkDescription: "Here's why",
        storyLink: "#"
      },
      {
        imageUrl: "https://quackit.com/pix/samples/16l.jpg",
        heading: "Sanity check",
        storyDescription:
          "Objectively innovate empowered manufactured products whereas parallel platforms.",
        storyLinkDescription: "Stop here",
        storyLink: "#"
      }
    ]
  };

  render() {
    const { stories } = this.state;
    return <Stories stories={stories} />;
  }
}

export default StoryCards;
