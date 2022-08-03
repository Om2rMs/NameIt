import React from "react";
import './SearchBox.css'

const SearchBox = ({ onInputText }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputText(event.target.value)}
                placeholder="Type Keyword"
                className="search-input" />
        </div>
    )
}

export default SearchBox;