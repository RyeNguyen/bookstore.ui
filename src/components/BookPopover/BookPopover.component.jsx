import React from "react";
import {Link} from 'react-router-dom';
import {Rate} from 'antd';

import {Popover} from "antd";
import Avvvatars from "avvvatars-react";

import Heart from "../../assets/icons/icon-heart--active.svg";

import "./BookPopover.styles.scss";

const BookPopover = ({data, children}) => {
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
                        {<img src={Heart} alt="favorite"/>}
                    </div>

                    <div className="popover--main">
                        <h3 style={{width: '80%'}}>{data.name}</h3>

                        <Rate
                            allowHalf
                            disabled
                            style={{ color: "#FFCD1E" }}
                            defaultValue={data.rating}
                        />

                        <div style={{marginTop: '1.6rem'}}>Tác giả: <Link to='#'>{data.author}</Link></div>

                        <div style={{height: "1.6rem"}}/>

                        <div>
                            Thể loại:{" "}
                            {data.categories.map((category, index) =>
                                index === data.categories.length - 1 ? (
                                    <span key={index}>
                                        <Link to='#'>
                                            <span>{category}</span>
                                        </Link>
                                    </span>
                                ) : (
                                    <span key={index}>
                                        <Link to='#'>
                                            <span>{category}</span>
                                        </Link>
                                        {", "}
                                    </span>
                                )
                            )}
                        </div>

                        <div style={{height: "5.6rem"}}/>

                        <Link to='#' className="popover__seller">
                            <span>
                                {data.sellerImage ? (
                                    <div
                                        className="popover__seller-img"
                                        style={{backgroundImage: `url(${data.sellerImage})`}}
                                    />
                                ) : (
                                    <Avvvatars style="shape" size={24} value={data.sellerName}/>
                                )}

                                <div className="popover__seller-name">{data.sellerName}</div>
                            </span>
                        </Link>
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
