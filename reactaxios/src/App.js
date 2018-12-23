import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/posts';
//const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
    //eventHandler
  }
  

componentDidMount(){
  this.setState({ isLoading: true});

  Axios.get(API)
  .then(result => this.setState({
    posts: result.data,
    isLoading: false
  }))
  .catch(error => this.setState({
    error,
    isLoading: false
  }));
}

  render() {
    const {posts, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
       <h1>Data</h1>
       <ul>
        {posts.map(post =>
          <li key={post.Id}>
            <a href={post.title}>{post.body}</a>
          </li>
        )}
      </ul>

      </div>
    );
  }
}

export default App;
