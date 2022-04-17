import React from "react";
import Avvvatars from "avvvatars-react";
import { Rate } from "antd";

import "./UserComment.styles.scss";

const UserComment = ({ name, image, rating, comment }) => {
  return (
    <div className="comment">
      <div className="comment__user-info">
        {image ? (
          <div
            className="comment__user-img"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <Avvvatars style="shape" size={48} value={name} />
        )}
        <div className="comment__user-info--right">
          {name}
          <Rate
            allowHalf
            disabled
            style={{ color: "#FFCD1E" }}
            defaultValue={rating}
          />
        </div>
      </div>

      {comment}
    </div>
  );
};

export default UserComment;
