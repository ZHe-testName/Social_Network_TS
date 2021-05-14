//В компонент нужно передать имя класса если нужно
//и картинку по url адресу
//он записываеться background-img: url
//через styled-componets библиотеку

import './avatar.module.css';
import styled from 'styled-components';

type AvatarSettings = {
    className: string,
    imgUrl: string,
};

type AvatarProps = {
    settings: AvatarSettings
};

function Avatar(props: AvatarProps) {
    const {className, imgUrl} = props.settings;

    const AvatarImage = styled.div`
        background-position: center;
        background-size: cover;
        background-origin: no-repeat;
        background-image: url(${imgUrl});
    `;

    return (
        <AvatarImage className={className}></AvatarImage>
    );
};

export default Avatar;