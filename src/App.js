import React, { Component } from 'react';
import Quote from './components/Quote';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "aGuideHubt"
    }
  }
 
  getRandomQuote = () => {
    // Get random quote from Web API
    this.setState({ message: "getting random quote..."});

    fetch ('https://triviahhh-api-gateway-rhn-engineering-dschenck-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/gateway/quotes') 
    .then(r =>  r.json().then(data => ({status: r.status, body: data})))
    .then(data => this.setState({message:data.body[1].quotation}))
  }
 
  render() {
    return (
      <div>
        <div className="h1 bg-danger text-white text-center p-2">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={this.getRandomQuote}>
            Get Random Quote
          </button>
        </div>
      </div>
    );
  }
}
 
export default App;