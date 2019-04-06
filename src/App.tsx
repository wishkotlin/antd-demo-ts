import React, { Component } from "react";
import { Button } from "antd";
// import "./App.css";
import axios from "./utils/Axios";
import "./App.scss";

interface myprops{

}
interface mystate{
  msg: any;
}
class App extends Component<myprops,mystate> {
  constructor(props:any){
    super(props)
    this.state = {
      msg: ''
    }
  }
  componentDidMount() {
    axios
      .get("/api")
      .then(res => {
        console.log(res);
        this.setState( () => ({
          msg: res.data
        }) )
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Button type="primary">{ this.state.msg }</Button>
      </div>
    );
  }
}

export default App;
