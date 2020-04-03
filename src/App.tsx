import React, { Component } from 'react';
import { Login } from './Login'
import { Main } from './Main';
import { proxy } from './Proxy';

export default class App extends Component
{
  
  state = { register: true };
  

render()
{
  proxy.addEventListener("login", () => this.setState( { register: false }), this);
  return (
    <div className="app">
    { this.state.register ? <Login /> :  <Main /> }
    </div>
    );
}

}