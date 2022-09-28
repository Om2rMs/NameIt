import React from "react";
import './NameCard.css';


const InstaSearch =
    'https://www.instagram.com/';
const NameCard = ({ SuggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link" href={`${InstaSearch}${SuggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{ }{SuggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;