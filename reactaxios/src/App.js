import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
    //eventHandler
  }

componentDidMount(){
  this.setState({ isLoading: true});

  Axios.get(API + DEFAULT_QUERY)
  .then(result => this.setState({
    hits: result.data.hits,
    isLoading: false
  }))
  .catch(error => this.setState({
    error,
    isLoading: false
  }));
}

  render() {
    const {hits, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <h1>Alive</h1>

      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
          )}
      </ul>

      </div>
    );
  }
}

export default App;
