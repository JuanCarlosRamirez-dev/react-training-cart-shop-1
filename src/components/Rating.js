import React from 'react'
import star from '../assets/star-rate.svg';
import comment from '../assets/comment.png';

export default function Rating({ commentsNumber }) {
    return (
        <div className="stars-and-globe">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <div style={{ marginLeft: "5px" }}>{commentsNumber}<img className="comments-img" src={comment} alt="comment globe" /></div>
        </div>
    )
}

