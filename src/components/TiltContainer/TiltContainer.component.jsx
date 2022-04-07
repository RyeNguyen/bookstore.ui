import React from "react";

import Tilt from "react-parallax-tilt";

import "./TiltContainer.styles.scss";

const TiltContainer = ({ data, children }) => {
  return (
    <Tilt
      perspective={7000}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#FDE465"
      glarePosition="all"
      className={data}
    >
        {children}
    </Tilt>
  );
};

export default TiltContainer;
