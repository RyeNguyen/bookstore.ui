import React, { useEffect, useState } from "react";

import Avvvatars from "avvvatars-react";
import { m, useCycle } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar.component";
import NavbarMobile from "../../components/Navbar/NavbarMobile.component";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer.component";
import InputField from "../../components/InputField/InputField.component";
import Carousel from "../../components/Carousel/Carousel.component";
import Button from "../../components/Button/Button.component";
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

const mobileBookVariants = {
  hidden: {
    opacity: 0,
    x: '-30vw'
  },
  visible: {
    opacity: 1,
    x: '-12vw',
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }
}

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

const categoriesVariants = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}

const categoriesItemVariants = {
  hidden: {
    y: '4rem',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.7
    }
  }
}

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
          <HeadlineContainer text="S??ch m???i v?? hot" textSize="Large" />

          <div style={{ height: "1.6rem" }} />

          <m.p
            variants={subHeadlineVariants}
            initial="hidden"
            animate="visible"
          >
            Kh??m ph?? v?? v??n th??? gi???i th??ng qua ng??i b??t c???a t???ng t??c gi???
          </m.p>

          <div style={{ height: "4.8rem" }} />

          <InputField inputType="search" buttonText="T??m ki???m" />
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
            variants={window.matchMedia("(max-width: 1024px)").matches ? mobileBookVariants : bookVariants}
          />

          <m.div transition={{ duration: 0.6 }} className="hero__img-info">
            <m.div
              className="hero__img-info--left"
              variants={heroVariants}
              transition={{ delay: 0 }}
            >
              <h2>{heroBookName}</h2>

              <div style={{ height: "3.2rem" }} />

              <p>T??c gi???: {heroBookAuthor}</p>

              <div style={{ height: "1.6rem" }} />

              <p>
                Th??? lo???i:{" "}
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

      {/* Danh m???c s??ch b??n ch???y */}
      <section className="section section__popular">
        <div className="section__title">
          <HeadlineContainer text="S??ch b??n ch???y" textSize="Medium" />
        </div>

        <div style={{ height: "1.6rem" }} />

        <Carousel />
      </section>

      <div style={{ height: "20.6rem" }} />

      {/* Li???t k?? c??c danh m???c/th??? lo???i s??ch */}
      <section className="section section__categories">
        <div className="section__title">
          <HeadlineContainer
            text="Kh??m ph?? danh m???c s??ch ??a d???ng"
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

          <m.div
              variants={categoriesVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className="categories--right"
          >
            {/*Hi???n th??? nhi???u s??ch h??n ??? m??n l???n h??n*/}
            {BookList.slice(0, window.matchMedia("(min-width: 1600px)").matches ? 8 : 6).map((book) => {
              return (
                  <m.div variants={categoriesItemVariants} key={book.id} className="categories__card">
                    <BookCard data={book} />
                  </m.div>
              )})
            }

            <div style={{ height: "3.8rem" }} />

            <div className="categories__button">
              <Button buttonText='Xem t???t c???'/>
            </div>
          </m.div>
        </div>
      </section>

      <div style={{ height: "16.4rem" }} />

      <section className="section section__seller">
        <div className="section__title">
          <HeadlineContainer
            text="?????ng h??nh c??ng nh???ng nh?? s??ch n???i b???t"
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
