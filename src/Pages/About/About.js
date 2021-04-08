import React from "react";
import { useParams } from "react-router";

const About = () => {
  const { params } = useParams();
  return (
    <div>
      <h1>About</h1>
      <h4>About: {params}</h4>
    </div>
  );
};

export default About;
