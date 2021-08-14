//В компонент нужно передать имя класса если нужно
//и картинку по url адресу
//он записываеться background-img: url
//через styled-componets библиотеку

import './avatar.module.css';
import classes from './avatar.module.css';

export  type AvatarSettings = {
    className: string,
    imgUrl: string,
  };

export  type AvatarPropsType = {
    settings: AvatarSettings,
  };

function Avatar(props: AvatarPropsType) {
    const { className, imgUrl } = props.settings;

    // const AvatarImage = styled.div`
    //     width: ${width}px;
    //     height: ${height}px;
    //     background-position: center;
    //     background-size: cover;
    //     background-origin: no-repeat;
    //     background-image: url(${imgUrl});
    //     border: 1px solid black;
    // `;

    return (
        <div 
          className={`${classes.avatar} ${className}`}
          style={{backgroundImage: `url(${imgUrl})`}}></div>
    );
};

export default Avatar;