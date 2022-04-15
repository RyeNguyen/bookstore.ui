import React from "react";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";

import BookPopover from "../BookPopover/BookPopover.component";

import { BookList } from "../../data/MockupData";

import CarouselArrow from "../../assets/icons/icon-arrow--carousel.svg";
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
  const navigate = useNavigate();

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
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel__container">
      <Slider {...carouselSettings}>
        {BookList.map((book, index) => (
          <BookPopover key={index} data={book}>
            <div className="carousel__item">
              <img
                  style={{cursor: 'pointer'}}
                  onClick={() => navigate(`/book-detail/${book.id}`)}
                  src={book.image} alt="book-thumbnail"
              />
            </div>
          </BookPopover>
        ))}
      </Slider>

      <div className="carousel__background">
        <img src={Shelf} alt="bookshelf-img" />
      </div>
    </div>
  );
};

export default Carousel;
