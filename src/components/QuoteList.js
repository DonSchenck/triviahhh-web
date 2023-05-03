import React from "react";
import Quote from "./Quote";


function QuoteList(props) {
    return (
        <div>
            {props.quotes.map(q =>
                <Quote key={q.id} id={q.id} quotation={q.quotation} author={q.author} />)}

        </div>
    );
}

export default QuoteList;