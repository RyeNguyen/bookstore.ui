import React, { useEffect, useState } from "react";

import Avvvatars from "avvvatars-react";
import { m, useCycle } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar.component";
import NavbarMobile from "../../components/Navbar/NavbarMobile.component";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer.component";
import InputField from "../../components/InputField/InputField.component";
import Carousel from "../../components/Carousel/Carousel.component";
import BookCard from "../../components/BookCard/BookCard.component";
import BestSellerRow from "../../components/BestSellerRow/BestSellerRow.component";
import Footer from "../../components/Footer/Footer.component";

import CarouselButton from "../../assets/icons/icon-arrow--carousel-hero.svg";
import Doodle1 from "../../assets/images/doodle-1.svg";

import { BestSellers, BookCategories, BookList } from "../../data/MockupData";

import "./Home.styles.scss";

const subHeadlineVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.4,
      type: "spring",
    },
  },
};

const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      when: "beforeChildren",
    },
  },
};

const bookVariants = {
  hidden: {
    opacity: 0,
    // x: "5vw",
    rotate: "-10deg"
  },
  visible: {
    opacity: 1,
    // x: 0,
    rotate: "21deg",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const doodleVariants = {
  animationOne: {
    opacity: 0.5,
    scale: 1.5,
    transition: {
      duration: 3,
    },
  },
  animationTwo: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3,
    },
  },
};

const Home = () => {
  const [heroBookName, setHeroBookName] = useState("");
  const [heroBookAuthor, setHeroBookAuthor] = useState("");
  const [heroBookCategories, setHeroBookCategories] = useState([]);
  const [heroBookSeller, setHeroBookSeller] = useState("");
  const [heroBookSellerImg, setHeroBookSellerImg] = useState(null);
  const [heroBookImg, setHeroBookImg] = useState(null);
  const [heroBookCounter, setHeroBookCounter] = useState(0);

  const [currentCategory, setCurrentCategory] = useState(0);

  const [doodleAnimation, cycleDoodleAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );

  useEffect(() => {
    setHeroBookName(BookList[heroBookCounter].name);
    setHeroBookAuthor(BookList[heroBookCounter].author);
    setHeroBookCategories(BookList[heroBookCounter].categories);
    setHeroBookSeller(BookList[heroBookCounter].sellerName);
    setHeroBookSellerImg(BookList[heroBookCounter].sellerImage);
    setHeroBookImg(BookList[heroBookCounter].image);
  }, [heroBookCounter]);

  const changeHeroBook = () => {
    if (heroBookCounter === BookList.slice(0, 3).length - 1) {
      return setHeroBookCounter(0);
    }

    return setHeroBookCounter(heroBookCounter + 1);
  };

  return (
    <>
      {window.matchMedia("(max-width: 1024px)").matches ? (
          <NavbarMobile />
      ) : (
          <Navbar />
      )}

      {/* hero section */}
      <section className="hero">
        {/* <m.div
          variants={doodleVariants}
          animate={doodleAnimation}
          onAnimationComplete={() => cycleDoodleAnimation()}
          className="hero__doodle"
        >
          <img src={Doodle1} alt="background-decoration" />
        </m.div> */}

        <div className='hero__doodle'>
        <img src={Doodle1} alt="background-decoration" />
        </div>

        <div className="hero--left">
          <HeadlineContainer text="Sách mới và hot" textSize="Large" />

          <div style={{ height: "1.6rem" }} />

          <m.p
            variants={subHeadlineVariants}
            initial="hidden"
            animate="visible"
          >
            Khám phá vô vàn thế giới thông qua ngòi bút của từng tác giả
          </m.p>

          <div style={{ height: "4.8rem" }} />

          <InputField inputType="search" buttonText="Tìm kiếm" />
        </div>

        <m.div
          className="hero--right"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <m.img
            src={heroBookImg}
            alt="hero"
            className="hero__img"
            variants={bookVariants}
          />

          {/* <img
          src={heroBookImg}
          alt="hero"
          className="hero__img"
          /> */}

          <m.div transition={{ duration: 0.6 }} className="hero__img-info">
            <m.div
              className="hero__img-info--left"
              variants={heroVariants}
              transition={{ delay: 0 }}
            >
              <h2>{heroBookName}</h2>

              <div style={{ height: "3.2rem" }} />

              <p>Tác giả: {heroBookAuthor}</p>

              <div style={{ height: "1.6rem" }} />

              <p>
                Thể loại:{" "}
                {heroBookCategories.map((category, index) =>
                  index === heroBookCategories.length - 1 ? (
                    <span>{category}</span>
                  ) : (
                    <span>{category}, </span>
                  )
                )}
              </p>

              <div className="hero__seller">
                {heroBookSellerImg ? (
                  <div
                    className="hero__seller-img"
                    style={{ backgroundImage: `url(${heroBookSellerImg})` }}
                  />
                ) : (
                  <Avvvatars
                    style="shape"
                    size={24}
                    value={heroBookSellerImg}
                  />
                )}

                <div className="hero__seller-name">{heroBookSeller}</div>
              </div>
            </m.div>

            <div className="hero__img-info--right">
              <div
                onClick={changeHeroBook}
                className="hero__img-button"
                style={{ backgroundImage: `url(${CarouselButton})` }}
              />
            </div>
          </m.div>
        </m.div>
      </section>

      <div style={{ height: "19rem" }} />

      {/* Danh mục sách bán chạy */}
      <section className="section section__popular">
        <div className="section__title">
          <HeadlineContainer text="Sách bán chạy" textSize="Medium" />
        </div>

        <div style={{ height: "1.6rem" }} />

        <Carousel />
      </section>

      <div style={{ height: "20.6rem" }} />

      {/* Liệt kê các danh mục/thể loại sách */}
      <section className="section section__categories">
        <div className="section__title">
          <HeadlineContainer
            text="Khám phá danh mục sách đa dạng"
            textSize="Medium"
          />
        </div>

        <div style={{ height: "6.4rem" }} />

        <div className="categories">
          <div className="categories--left">
            {BookCategories.map((category, index) => (
              <div
                key={index}
                className={`categories__item ${
                  index === currentCategory ? "active" : ""
                }`}
                onClick={() => setCurrentCategory(index)}
              >
                {category}
                <div 
                  className={`categories__item-indicator ${
                    index === currentCategory ? "active" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="categories--right">
            {/*Hiển thị nhiều sách hơn ở màn lớn hơn*/}
            {BookList.slice(0, window.matchMedia("(min-width: 1600px)").matches ? 8 : 6).map((book) => {
              return (
                  <div key={book.id} className="categories__card">
                    <BookCard data={book} />
                  </div>
              )})
            }

            <div style={{ height: "3.8rem" }} />

            <div className="categories__button">
              <button>Xem tất cả</button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "16.4rem" }} />

      <section className="section section__seller">
        <div className="section__title">
          <HeadlineContainer
            text="Đồng hành cùng những nhà sách nổi bật"
            textSize="Medium"
          />
        </div>

        <div style={{ height: "8rem" }} />

        {BestSellers.map((seller) => {
          const topBooks = BookList.filter(
            (book) => book.sellerId === seller.id
          ).slice(0, 2);

          return (
            <BestSellerRow
              key={seller.id}
              seller={seller}
              topBooks={topBooks}
            />
          );
        })}
      </section>

      <Footer />
    </>
  );
};

export default Home;
