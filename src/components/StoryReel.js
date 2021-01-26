import React from "react";
import Story from "./Story";
import "./StoryReel.css";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/6/6a/Kingkong_bigfinal1.jpg"
        profileSrc="https://media.resources.festicket.com/image/348x400/smart/filters:quality(70)/www/artists/IceCube_L.png"
        title="King Kong"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png"
        profileSrc="https://media.resources.festicket.com/image/348x400/smart/filters:quality(70)/www/artists/IceCube_L.png"
        title="Godzilla"
      />
      <Story
        image="https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg"
        profileSrc="https://rapgra.eu/wp-content/uploads/2017/07/48616.jpg"
        title="Pacific Rim"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/d/dd/2012_Poster.jpg"
        profileSrc="https://rapgra.eu/wp-content/uploads/2017/07/48616.jpg"
        title="2012"
      />
    </div>
  );
};

export default StoryReel;
