import React, { Component } from 'react';

import PersistentDrawerLeft from './components/PersistentDrawerLeft';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
    console.log("API Mounted");
  }

  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;
