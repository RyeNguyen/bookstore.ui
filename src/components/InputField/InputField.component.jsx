import React from "react";

import { Input } from "antd";

import "./InputField.styles.scss";

import SearchIcon from "../../assets/icons/icon-search.svg";

const { Search } = Input;

const InputField = ({ inputType, buttonText }) => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="input__field">
      {inputType === "search" && (
        <Search
          placeholder="Tên sách, tên tác giả, thể loại..."
          enterButton={
            <button className="button--primary input__button">
              <span>
                <img src={SearchIcon} alt="button-icon" />
                {buttonText}
              </span>
            </button>
          }
          size="large"
          onSearch={onSearch}
        />
      )}
    </div>
  );
};

export default InputField;
