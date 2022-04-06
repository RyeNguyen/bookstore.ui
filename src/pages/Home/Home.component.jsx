import React, { useEffect, useState } from "react";

import Tilt from 'react-tilt'

import Navbar from "../../components/Navbar/Navbar.component";
import InputField from "../../components/InputField/InputField.component";
import Carousel from "../../components/Carousel/Carousel.component";
import BookCard from "../../components/BookCard/BookCard.component";

import CarouselButton from "../../assets/icons/icon-arrow--carousel-hero.svg";

import {
  BookCategories,
  BookList,
} from "../../data/MockupData";

import "./Home.styles.scss";

const Home = () => {
  const [heroBookName, setHeroBookName] = useState("");
  const [heroBookAuthor, setHeroBookAuthor] = useState("");
  const [heroBookCategories, setHeroBookCategories] = useState([]);
  const [heroBookSeller, setHeroBookSeller] = useState("");
  const [heroBookImg, setHeroBookImg] = useState("");
  const [heroBookCounter, setHeroBookCounter] = useState(0);

  useEffect(() => {
    setHeroBookName(BookList[heroBookCounter].name);
    setHeroBookAuthor(BookList[heroBookCounter].author);
    setHeroBookCategories(BookList[heroBookCounter].categories);
    setHeroBookSeller(BookList[heroBookCounter].sellerName);
    setHeroBookImg(BookList[heroBookCounter].image);
  }, [heroBookCounter]);

  const tiltOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            20,     // max tilt rotation (degrees)
    perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.02,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const changeHeroBook = () => {
    if (heroBookCounter === BookList.length - 1) {
      return setHeroBookCounter(0);
    }

    return setHeroBookCounter(heroBookCounter + 1);
  };

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero--left">
          <h1>Sách mới và hot</h1>

          <div style={{ height: "1.6rem" }} />

          <p>Khám phá vô vàn thế giới thông qua ngòi bút của từng tác giả</p>

          <div style={{ height: "4.8rem" }} />

          <InputField inputType="search" buttonText="Tìm kiếm" />
        </div>

        <div className="hero--right">
          <Tilt options={tiltOptions}>
          <img src={heroBookImg} alt="hero-image" className="hero__img" />
          </Tilt>

          <div className="hero__img-info">
            <div className="hero__img-info--left">
              <h2>{heroBookName}</h2>

              <div style={{ height: "3.2rem" }} />

              <p>Tác giả: {heroBookAuthor}</p>

              <div style={{ height: "1.6rem" }} />

              <p>Thể loại: {heroBookCategories}</p>
            </div>

            <div className="hero__img-info--right">
              <div
                onClick={changeHeroBook}
                className="hero__img-button"
                style={{ backgroundImage: `url(${CarouselButton})` }}
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "19rem" }} />

      <section className="section section__popular">
        <div className="section__title">
          <h2>Sách bán chạy</h2>
        </div>

        <div style={{ height: "1.6rem" }} />

        <Carousel />
      </section>

      <div style={{ height: "20.6rem" }} />

      <section className="section section__categories">
        <div className="section__title">
          <h2>Khám phá danh mục sách đa dạng</h2>
        </div>

        <div style={{ height: "6.4rem" }} />

        <div className="categories">
          <div className="categories--left">
            {BookCategories.map((category, index) => (
              <div key={index} className="categories__item">
                {category}
              </div>
            ))}
          </div>

          <div className="categories--right">
            {BookList.slice(0, 6).map((book) => (
              <div key={book.id} className="categories__card">
                <BookCard data={book} />
              </div>
            ))}

            <div style={{ height: "3.8rem" }}/>

            <div className='categories__button'>
              <button>Xem tất cả</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
