// App.js

import { useEffect, useState } from "react"
import "./App.css"
import Quote from "./components/Quote"
import { useRef } from "react"

function App() {
  const [data, setData] = useState([]);

  const fetchAllQuotes = () => {
    fetch(`https://triviahhh-api-gateway-rhn-engineering-dsch-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/gateway/quotes`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message)
      });
    }

  /*   useEffect(() => {
      fetchData();
    }, [])
   */
  return (
    <div className="App">
      <Quote />
      <button onClick={fetchAllQuotes}>Get list of quotes</button>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Quotation</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.quoteID}</td>
            <td>{item.author}</td>
            <td>{item.quotation}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;