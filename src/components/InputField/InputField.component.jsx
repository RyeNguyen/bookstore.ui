import React from 'react';

import {Input} from 'antd';

import './InputField.styles.scss';

import SearchIcon from '../../assets/icons/icon-search.svg';

const {Search} = Input;

const InputField = ({inputType, buttonText}) => {
    const onSearch = value => console.log(value);

    return (
        <div className='input__field'>
            {inputType === 'search' && (
                <Search
                    placeholder="Tên sách, tên tác giả, thể loại..."
                    enterButton={
                        <div className='input__button'>
                            <div className='input__button-icon' style={{backgroundImage: `url(${SearchIcon})`}}/>
                            {buttonText}
                        </div>
                    }
                    size="large"
                    onSearch={onSearch}
                />
            )}
        </div>
    )
}

export default InputField;