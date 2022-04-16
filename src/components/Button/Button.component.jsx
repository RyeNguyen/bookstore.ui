import React from "react";

import "./Button.styles.scss";

const Button = ({ buttonText, buttonIcon, buttonType }) => {
  return (
    <button className={buttonType ? "button--secondary" : "button--primary"}>
      <span>
        {buttonText}
        {buttonIcon && <img src={buttonIcon} alt="button-icon" />}
      </span>
    </button>
  );
};

export default Button;
