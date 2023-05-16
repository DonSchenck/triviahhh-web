// Quote.js

import { useEffect, useState } from "react"
import "./Quote.css"

function Quote(props) {
    const [data, setData] = useState();
    const fetchRandomQuote = () => {
        fetch(`https://triviahhh-api-gateway-rhn-engineering-dsch-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/gateway/quotes/random`)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

/*     useEffect(() => {
        fetchRandomQuote();
    }, [])
 */
    return (
        <>
            <div className="quote">
                <button onClick={fetchRandomQuote}>Get Random Quote</button>
                {
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Quotation</th>
                        </tr>
                        {
                            data &&
                            <tr key={data.quoteID}>
                                <td>{data.quoteID}</td>
                                <td>{data.author}</td>
                                <td>{data.quotation}</td>
                            </tr>
                        }
                    </tbody>
                }
            </div>
        </>
    );
}

export default Quote;