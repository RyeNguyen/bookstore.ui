import React from "react";
import { m } from "framer-motion";

import BookPopover from "../BookPopover/BookPopover.component";
import TiltContainer from "../TiltContainer/TiltContainer.component";

import Shelf from "../../assets/images/bookshelf--side.png";

import "./BestSellerRow.styles.scss";

const separatorVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "40%",
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const BestSellerRow = (data) => {
  return (
    <div className="bestseller">
      <TiltContainer data="bestseller__card">
        <div className="bestseller__card--inner">
          <div
            className="bestseller__img"
            style={{ backgroundImage: `url(${data.seller.sellerImage})` }}
          />
          <div className="bestseller__name">{data.seller.sellerName}</div>
          <div className="bestseller__desc">{data.seller.description}</div>
        </div>
      </TiltContainer>

      <m.div
        variants={separatorVariants}
        initial="hidden"
        whileInView="visible"
        className="bestseller__separator left"
      />
      <m.div
        variants={separatorVariants}
        initial="hidden"
        whileInView="visible"
        className="bestseller__separator right"
      />

      <div className="bestseller__books">
        {data.topBooks.map((book) => (
          <BookPopover key={book.id} data={book}>
            <div className="bestseller__book">
              <img src={book.image} alt="top-book" />
            </div>
          </BookPopover>
        ))}
      </div>

      <div className="bestseller__background">
        <img src={Shelf} alt="bookshelf-img" />
      </div>
    </div>
  );
};

export default BestSellerRow;
