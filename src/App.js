import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {domAnimation, LazyMotion} from "framer-motion"

import Home from "./pages/Home/Home.component";
import BookDetail from "./pages/BookDetail/BookDetail.component";

const App = () => {
    return (
        <LazyMotion strict features={domAnimation}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/book-detail/:bookId' element={<BookDetail/>}/>
            </Routes>
        </LazyMotion>
    )
}

export default App;
