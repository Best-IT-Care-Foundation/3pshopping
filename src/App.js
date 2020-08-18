import React, { Component,} from "react";
import "./App.css";
import Navigation from './Component/Navigation/Navigation'
import SLider from './Component/Slider/Slider'
import SLider1 from './Component/Slider/offerSlider'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SLider />
        <SLider1 />

      </div>
    );
  }
}
