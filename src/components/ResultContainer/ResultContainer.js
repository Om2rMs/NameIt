import React from "react";
import NameCard from './../NameCard/NameCard'
import './ResultContainer.css'


const ResultContainer = ({ SuggestedNames, writtenName, HeaderExpanded }) => {
    //first thing we display all list of suggested name
    const youtubeSearch =
        'https://www.instagram.com/';
    const currentName = writtenName;
    const SuggestNameJs = SuggestedNames.map((SuggestedName) => {
        //must make key for each element when use map 
        return <NameCard key={SuggestedName} SuggestedName={SuggestedName} />

    })
    return (

        <div className="result-container">
            {HeaderExpanded ? ('') : (
                <a className="card-link" href={`${youtubeSearch}${writtenName}`}>
                    <div className="result-name-card">
                        <p className="result-name">{writtenName}</p>
                    </div>
                </a>)}

            {SuggestNameJs}
        </div>
    );
};

export default ResultContainer;