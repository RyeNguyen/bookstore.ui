import React, {useEffect, useState} from 'react';

import Navbar from "../../components/Navbar/Navbar.component";
import InputField from "../../components/InputField/InputField.component";

import CarouselButton from '../../assets/icons/icon-arrow--carousel-hero.svg';

import {newAndHotBooks} from "../../data/MockupData";

import './Home.styles.scss';

const Home = () => {
    const [heroBookName, setHeroBookName] = useState('');
    const [heroBookAuthor, setHeroBookAuthor] = useState('');
    const [heroBookCategories, setHeroBookCategories] = useState([]);
    const [heroBookSeller, setHeroBookSeller] = useState('');
    const [heroBookImg, setHeroBookImg] = useState('');
    const [heroBookCounter, setHeroBookCounter] = useState(0);

    useEffect(() => {
        setHeroBookName(newAndHotBooks[heroBookCounter].name);
        setHeroBookAuthor(newAndHotBooks[heroBookCounter].author);
        setHeroBookCategories(newAndHotBooks[heroBookCounter].categories);
        setHeroBookSeller(newAndHotBooks[heroBookCounter].seller);
        setHeroBookImg(newAndHotBooks[heroBookCounter].image);
    }, [heroBookCounter]);

    const changeHeroBook = () => {
        if (heroBookCounter === newAndHotBooks.length - 1) {
            return setHeroBookCounter(0);
        }

        return setHeroBookCounter(heroBookCounter + 1);
    }

    return (
        <>
            <Navbar/>

            <section className='hero'>
                <div className='hero--left'>
                    <h1>Sách mới và hot</h1>

                    <div style={{height: '1.6rem'}}/>

                    <p>Khám phá vô vàn thế giới thông qua ngòi bút của từng tác giả</p>

                    <div style={{height: '4.8rem'}}/>

                    <InputField inputType='search' buttonText='Tìm kiếm'/>
                </div>

                <div className='hero--right'>
                    <img src={heroBookImg} alt="" className='hero__img'/>

                    <div className='hero__img-info'>
                        <div className='hero__img-info--left'>
                            <h2>{heroBookName}</h2>

                            <div style={{height: '3.2rem'}}/>

                            <p>Tác giả: {heroBookAuthor}</p>

                            <div style={{height: '1.6rem'}}/>

                            <p>Thể loại: {heroBookCategories}</p>
                        </div>

                        <div className='hero__img-info--right'>
                            <div
                                onClick={changeHeroBook}
                                className='hero__img-button' style={{backgroundImage: `url(${CarouselButton})`}}
                            />
                        </div>
                    </div>
                    )})}

                    {/*<Carousel*/}
                    {/*    autoPlay={false}*/}
                    {/*    emulateTouch*/}
                    {/*    infiniteLoop*/}
                    {/*    showArrows={false}*/}
                    {/*    showIndicators={false}*/}
                    {/*    showThumbs={false}*/}
                    {/*    showStatus={false}*/}
                    {/*    stopOnHover*/}
                    {/*    swipeable*/}
                    {/*    centerMode={false}*/}
                    {/*    className='hero__carousel'*/}
                    {/*>*/}
                    {/*    {MockupData.map((bookData) => (*/}
                    {/*        <img src={bookData.image} alt="" className='hero__img'/>*/}
                    {/*    ))}*/}
                    {/*</Carousel>*/}
                </div>
            </section>
        </>
    )
}

export default Home;