// Quote.js

import { useEffect, useState } from "react"
import "./Quote.css"

function Quote(props) {
    const [data, setData] = useState();
    const fetchRandomQuote = () => {
        fetch(`https://triviahhh-api-gateway-quotesforu.apps.edddf4151278f084ff6a.hypershift.aws-2.ci.openshift.org/gateway/quotes/random`)
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
                                <td className="quote">{data.quotation}</td>
                            </tr>
                        }
                    </tbody>
                }
            </div>
        </>
    );
}

export default Quote;
