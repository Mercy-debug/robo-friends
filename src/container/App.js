import React from 'react';
import CardList from '../component/CardList/CardList';
import SearchBox from '../component/SearchBox/SearchBox';
// import HomePage from '../component/HomePage/Home-page';
// import Login from '../container/Login/Login';
import Scroll from '../component/Scroll/Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: [],
      isSignedIn: true,
      pages: 'login'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "get"
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ robots: data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  isSignedIn = (event) => {
    this.setState({ isSignedIn: false })
  }

  swtichPage = () => {
    this.setState({ pages: 'home'})
  }

  render() {
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1 className='f1'>ROBOFRIENDS</h1>
        <SearchBox onInputChange={this.onInputChange} />
        {/* {
          this.state.pages === 'login' ?
            <Login swtichPage={this.swtichPage}/> : null
        } */}
        {
          !filteredRobots.length ?
            <h1 className='f4 mt6'>No Result Found</h1> : null
        }
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
