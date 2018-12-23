import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

const API = 'https://reqres.in/api/users';
//const DEFAULT_QUERY = 'redux';

function searchingFor(term){
  return function(x){
    return x.first_name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  

searchHandler(e){
    this.setState({
      term : e.target.value 
    });
}



componentDidMount(){
  this.setState({ isLoading: true});

  Axios.get(API)
  .then(result => this.setState({
    users: result.data.data,
    isLoading: false
  }))
  .catch(error => this.setState({
    error,
    isLoading: false
  }));
}

  render() {
    const {users,term, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
      <form>
        <input type="text"
          onChange={this.searchHandler}
          value={term}
        />
      </form>
       <h1>Data</h1>
       <ul>
        {users.filter(searchingFor(this.state.term)).map(user =>
          <li key={user.id}>
              <h2>User {user.id}:</h2>
              <h3><strong>Name:</strong> {user.first_name} <br></br>  <strong>Last Name:</strong> {user.last_name}</h3> 
              <img alt="avatar" src={user.avatar}></img>
          </li>
          
        )}
      </ul>

      </div>
    );
  }
}

export default App;
