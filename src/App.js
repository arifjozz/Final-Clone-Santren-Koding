import React, { Component } from 'react';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";
import KajianKoding from './components/KajianKoding';
import SantrenKilat from './components/SantrenKilat';
import Mondok from './components/Mondok';
import Tentang from './components/Tentang';
import Sign from './components/Sign';
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/kajiankoding" component={KajianKoding} />
          <Route path="/santrenkilat" component={SantrenKilat} />
          <Route path="/mondok" component={Mondok} />
          <Route path="/about" component={Tentang} />
          <Route path="/login" component={Sign} />
        </Switch>
        
      </div>
    )
  }
}
