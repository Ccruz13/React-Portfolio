import React from 'react';


function CardItem(props) {
    return (
        <li className='cards__item'>

            <div className="card_item_wrap">
                <img
                    className='cards__item__img'
                    alt='project'
                    src={props.src}
                />
            </div>
            <div className="cards__item__info">
                <p className="cards__item__text">
                    {props.text}
                    
                </p>
                <a href={props.path} >Click On Me</a>
            </div>
        </li>
    )
}
export default CardItem;
