import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Popover } from "antd";
import Avvvatars from 'avvvatars-react'

import { BookList } from "../../data/MockupData";

import CarouselArrow from "../../assets/icons/icon-arrow--carousel.svg";
import Heart from "../../assets/icons/icon-heart--active.svg";
import Shelf from "../../assets/images/bookshelf.png";

import "./Carousel.styles.scss";

/**
 * Nút điều chỉnh hoạt động lùi của carousel
 * @param {*} props
 * @returns button
 */
const CarouselPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="button--secondary carousel__button prev"
      onClick={onClick}
    >
      <img
        src={CarouselArrow}
        alt="prev-arrow"
        className="carousel__button-icon prev"
      />
    </button>
  );
};

/**
 * Nút điều chỉnh hoạt động tiến của carousel
 * @param {*} props
 * @returns button
 */
const CarouselNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="button--secondary carousel__button next"
      onClick={onClick}
    >
      <img
        src={CarouselArrow}
        alt="next-arrow"
        className="carousel__button-icon"
      />
    </button>
  );
};

const Carousel = ({ data }) => {
  const [likes, setLikes] = useState(Array(BookList.length).fill(false));

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

  const overlayStyle = {
    display: "hidden",
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    draggable: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    // cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "carousel",
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
  };

  const addToFavorite = (event) => {
    console.log(event);
  };

  return (
    <div className="carousel__container">
      <Slider {...carouselSettings}>
        {BookList.map((book, index) => (
          <Popover
            key={book.id}
            overlayStyle={overlayStyle}
            overlayInnerStyle={popoverStyle}
            placement="right"
            content={() => (
              <div className="popover">
                <div className="popover__favorite" onClick={addToFavorite}>
                  {likes[index] && <img src={Heart} alt="favorite" />}
                </div>

                <div className="popover--main">
                  <h3>{book.name}</h3>

                  <div style={{ height: "1.6rem" }} />

                  <div>Tác giả: {book.author}</div>

                  <div style={{ height: "1.6rem" }} />

                  <div>Thể loại: {book.categories}</div>

                  <div style={{ height: "5.6rem" }} />

                  <div className="popover__seller">
                    {book.sellerImage ? (
                        <div
                            className="popover__seller-img"
                            style={{ backgroundImage: `url(${book.sellerImage})` }}
                        />
                    ) : (
                        <Avvvatars style="shape" size={24} value={book.sellerName} />
                    )}

                    <div className="popover__seller-name">
                      {book.sellerName}
                    </div>
                  </div>
                </div>

                <div className="popover__price">
                  <h3>{`${book.price}đ`}</h3>
                </div>
              </div>
            )}
          >
            <div className="carousel__item">
              <img src={book.image} alt="book-thumbnail" />
            </div>
          </Popover>
        ))}
      </Slider>

      <div className="carousel__background">
        <img src={Shelf} alt="bookshelf-img" />
      </div>
    </div>
  );
};

export default Carousel;
