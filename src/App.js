import React, { Component } from "react";
import Header from "./header";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <button>Add</button>
        <div>
          <span>Name</span>
          <input type="text" placeholder="Your name" />
          <br />
          <span>Phone number</span>
        </div>
      </div>
    );
  }
}

export default App;
