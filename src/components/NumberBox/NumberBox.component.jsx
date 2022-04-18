import React from 'react';

import Button from '../Button/Button.component';

import './Numberbox.styles.scss';

const NumberBox = () => {
    return (
        <div className='number-box'>
            <Button buttonText='-'/>
            <input type="text"/>
            <Button buttonText='+'/>
        </div>
    )
}

export default NumberBox;