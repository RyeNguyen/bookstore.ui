import React from 'react';

import './InputField.styles.scss';

import Search from '../../assets/icons/icon-search.svg';

const InputField = () => {
    return (
        <div className='input__field'>
            <input type='text' className='input' placeholder='Tên sách, tên tác giả, thể loại...'/>
            <button className='input__button'>
                <div className='input__button-icon' style={{backgroundImage: `url(${Search})`}}/>
                Tìm kiếm
            </button>
        </div>
    )
}

export default InputField;