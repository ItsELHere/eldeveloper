import { Component } from "react";
import "../style/Home.style.css"

import Session1 from "../components/Session1.home";
import Session2 from "../components/Session2.home";
import Session3 from "../components/Session3.home";
import Session4 from "../components/Session4.home";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />
      </div>
    )
  }
}