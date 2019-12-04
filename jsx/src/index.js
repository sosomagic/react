// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = function() {
  const buttonText = { text: "Click me" };
  const style = {
    backgroundColor: "blue",
    color: "white",
    border: "1px solid red"
  };
  const labelText = "Enter Name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
