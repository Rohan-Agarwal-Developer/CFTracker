import React from "react";
import HandleData from "./HandleData";
import $ from "jquery";
//import Sorting from "./Sorting"

class InputHandle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', is_submitted: false };
    console.log("In function Input constructor");
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ 
      username: document.getElementById("inputhandle").value,
      is_submitted: true });
      console.log("In function submit handler");
  }
  render() {
    return (
      <div>
        <div class="form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only"></label>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="text" class="form-control" id="inputhandle" placeholder="Handle" />
          </div>
          <button type="submit" class="btn btn-light mb-2" onClick={this.mySubmitHandler}>Submit</button>
        </div>
        {this.state.is_submitted && <HandleData handle={this.state.username} />}
        {/* <HandleData handle={"srco"} /> */}
        {/* <Sorting></Sorting> */}
        {/* <Example /> */}
        {/* //<section id="submissions"></section> */}
      </div>
    );
  }
}

function App() {
  console.log("In function App");
  return (
    <div className="heading">
      <h1>Codeforces Performance Tracker</h1>
      <InputHandle />
    </div>
  );
}

export default App;