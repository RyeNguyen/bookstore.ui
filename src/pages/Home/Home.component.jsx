import React from 'react';

import Navbar from "../../components/Navbar/Navbar.component";
import InputField from "../../components/InputField/InputField.component";

import BookDemo from '../../assets/images/book-demo.jpg';

import './Home.styles.scss';

const Home = () => {
    return (
        <>
            <Navbar/>

            <section className='hero'>
                <div className='hero--left'>
                    <h1>Sách mới và hot</h1>

                    <div style={{height: '1.6rem'}}/>

                    <p>Khám phá vô vàn thế giới thông qua ngòi bút của từng tác giả</p>

                    <div style={{height: '4.8rem'}}/>

                    <InputField/>
                </div>

                <div className='hero--right'>
                    {/*<div className='hero__img' style={{backgroundImage: `url(${BookDemo})`}}/>*/}
                    <img src={BookDemo} alt="" className='hero__img'/>

                    <div className='hero__img-info'>
                        <div className='hero__img-info--left'>
                            <h2>Giây phút này</h2>

                            <div style={{height: '3.2rem'}}/>

                            <p>Tác giả: Guillaume Musso</p>

                            <div style={{height: '1.6rem'}}/>

                            <p>Thể loại: Tiểu thuyết, Lãng mạn, Văn học nước ngoài</p>
                        </div>

                        <div className='hero__img-info--right'>
                            <div className='hero__img-button' style={{}}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;