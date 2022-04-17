import React from "react";

import { m } from "framer-motion";

import "./HeadlineContainer.styles.scss";

const textVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const underlineVariants = {
    hidden: {
        width: 0
    },
    visible: {
        width: '75%',
        transition: {
            duration: 0.4,
            delay: 1,
            ease: 'easeIn'
        }
    }
}

const HeadlineContainer = ({ text, textSize = "Medium" }) => {
  return (
    <div className="headline__container">
      {textSize === "Large" ? (
        <m.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="headline"
        >
          {text}
        </m.h1>
      ) : (
        <m.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="headline"
        >
          {text}
        </m.h2>
      )}
      <m.div
        variants={underlineVariants}
        initial="hidden"
        whileInView="visible"
        className="headline__decoration"
        style={textSize === "Large" ? { bottom: "2.4rem" } : { bottom: "4px" }}
      />
    </div>
  );
};

export default HeadlineContainer;
