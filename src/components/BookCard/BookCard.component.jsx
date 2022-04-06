import React from 'react';

import Avvvatars from 'avvvatars-react'
import Tilt from 'react-parallax-tilt';

import './BookCard.styles.scss';

const BookCard = (book) => {
    return (
        <Tilt
            className="card"
            perspective={7000}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#FDE465"
            glarePosition="all"
        >
            <div className="card--inner">
                <div className="card__thumbnail">
                    <img src={book.data.image} alt="card-thumbnail"/>
                </div>

                <div className="card__interaction">
                    <div className="card__interaction-icon favorite"/>
                    <div className="card__interaction-icon cart"/>
                </div>

                <div style={{height: "1.6rem"}}/>

                <div className="card__title">{book.data.name}</div>

                <div className="card__author">{book.data.author}</div>

                <div style={{height: "1.6rem"}}/>

                <div className="card__seller">
                    {book.data.sellerImage ? (
                        <div className="card__seller-img" style={{backgroundImage: `url(${book.data.sellerImage})`}}/>
                    ) : (
                        <Avvvatars style="shape" size={24} value={book.data.sellerName}/>
                    )}
                    <div className="card__seller-name">{book.data.sellerName}</div>
                </div>

                <div className="card__price">{book.data.price}đ</div>
            </div>
        </Tilt>
    )
}

export default BookCard;