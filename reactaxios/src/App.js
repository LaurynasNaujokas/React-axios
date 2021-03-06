import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Axios from 'axios';
import 'bulma/css/bulma.css'

const API = 'https://reqres.in/api/users';
//const DEFAULT_QUERY = 'redux';

//Search function
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
  
// Setting state of term from user's input
searchHandler(e){
    this.setState({
      term : e.target.value 
    });
}

// Fetching API with exios
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
    const { users,term, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(isLoading) {
      return <p>Loading...</p>;
    }

    // Navbar component
    return (
      <div className="App">
      <div className="navbar-component">
      <Navbar />,
      </div>

     {/* Input field */}
      <form>
        <input type="text" className="input is-primary"
          onChange={this.searchHandler}
          value={term}
          placeholder="Search for user by name"
        />
      </form>
      
    {/* //Filtering and displaying fetcehd information */}
       <ul>
        {users.filter(searchingFor(this.state.term)).map(user =>
        <div className="box">
          <li key={user.id}>
              <h2 className="title is-3">User {user.id}:</h2>
              <h3 className="subtitle"><strong>Name:</strong> {user.first_name} <br></br>
                <strong>Last Name:</strong> {user.last_name}</h3> 
              <figure className="image is-128x128">
                <img alt="avatar" className="is-rounded" src={user.avatar}></img>
              </figure>
          </li>
        </div>
        )}
      </ul>

     
      <div className="footer-component">
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
