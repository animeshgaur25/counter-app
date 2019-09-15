import React, {
  Component
} from 'react';
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {

  constructor() {
    super();
    console.log("App-Constructor")
  }
  componentDidMount() {
    console.log("App-Mounted")
  }


  render() {
    console.log("App-Render")
    return ( <
      React.Fragment >
      <
      NavBar / >
      <
      Counters / >
      <
      /React.Fragment>
    )
  }
}

export default App;