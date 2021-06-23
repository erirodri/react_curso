import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'

const Card = ({lang,img,fcolor,scolor}) => {
    return (
        <div class="card" style={{background: `linear-gradient(to left, ${fcolor}, ${scolor}`}}>
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div>
    );
}

Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.object
}

export default Card


