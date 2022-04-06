import React from 'react';

import Avvvatars from 'avvvatars-react'
import Tilt from 'react-tilt'

import './BookCard.styles.scss';

const BookCard = (book) => {
    const tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            20,     // max tilt rotation (degrees)
        perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <Tilt options={tiltOptions}>
            <div className="card">
                <div className="card__thumbnail">
                    <img src={book.data.image} alt="card-thumbnail" />
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
                        <Avvvatars style="shape" size={24} value={book.data.sellerName} />
                    )}
                    <div className="card__seller-name">{book.data.sellerName}</div>
                </div>

                <div className="card__price">{book.data.price}đ</div>
            </div>
        </Tilt>
    )
}

export default BookCard;