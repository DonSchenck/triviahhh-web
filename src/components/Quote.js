import React from "react";
import "./Quote.css";

function Quote(props) {
    return (
    <div className="quote">
        <span>
            {props.id}{props.quotation}{props.author}
        </span>
    </div>
    );
}

export default Quote;
