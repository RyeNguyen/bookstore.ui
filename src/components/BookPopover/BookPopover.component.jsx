import React from "react";

import { Popover } from "antd";
import Avvvatars from "avvvatars-react";

import Heart from "../../assets/icons/icon-heart--active.svg";

import "./BookPopover.styles.scss";

const BookPopover = ({ data, children }) => {
  const popoverStyle = {
    padding: "2.4rem",
    background: "rgba( 255, 255, 255, 0.75 )",
    boxShadow: "0 10px 32px -8px rgba(#333333, 0.5)",
    backdropFilter: "blur(10px) saturate(200%)",
    WebkitBackdropFilter: "blur(10px) saturate(200%)",
    border: "1px solid rgba( 255, 255, 255, 0.3 )",
    fontSize: "1.8rem",
    fontFamily: "'Be Vietnam Pro', sans-serif",
    position: "relative",
  };

  return (
    <Popover
      key={data.id}
      overlayInnerStyle={popoverStyle}
      placement="right"
      content={() => (
        <div className="popover">
          <div className="popover__favorite">
            {<img src={Heart} alt="favorite" />}
          </div>

          <div className="popover--main">
            <h3>{data.name}</h3>

            <div style={{ height: "1.6rem" }} />

            <div>Tác giả: {data.author}</div>

            <div style={{ height: "1.6rem" }} />

            <div>Thể loại: {data.categories}</div>

            <div style={{ height: "5.6rem" }} />

            <div className="popover__seller">
              {data.sellerImage ? (
                <div
                  className="popover__seller-img"
                  style={{ backgroundImage: `url(${data.sellerImage})` }}
                />
              ) : (
                <Avvvatars style="shape" size={24} value={data.sellerName} />
              )}

              <div className="popover__seller-name">{data.sellerName}</div>
            </div>
          </div>

          <div className="popover__price">
            <h3>{`${data.price}đ`}</h3>
          </div>
        </div>
      )}
    >
      {children}
    </Popover>
  );
};

export default BookPopover;
