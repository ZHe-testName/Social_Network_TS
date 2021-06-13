//В компонент нужно передать имя класса если нужно
//и картинку по url адресу
//он записываеться background-img: url
//через styled-componets библиотеку

import './avatar.module.css';
import styled from 'styled-components';

import {AvatarProps} from '../../redux/types';

function Avatar(props: AvatarProps) {
    const {className, imgUrl, width, height} = props.settings;

    const AvatarImage = styled.div`
        width: ${width}px;
        height: ${height}px;
        background-position: center;
        background-size: cover;
        background-origin: no-repeat;
        background-image: url(${imgUrl});
        border: 1px solid black;
    `;

    return (
        <AvatarImage className={className}></AvatarImage>
    );
};

export default Avatar;