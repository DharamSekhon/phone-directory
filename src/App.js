import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <button>Add</button>
      <div>
        <span>Name</span>
        <input type="text" placeholder="Your name" />
        <br />
        <span>Phone number</span>
      </div>
    </div>
  );
};

export default App;
