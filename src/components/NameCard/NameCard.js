import React from "react";
import './NameCard.css';


const youtubeSearch =
    'https://www.instagram.com/';
const NameCard = ({ SuggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link" href={`${youtubeSearch}${SuggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{ }{SuggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;