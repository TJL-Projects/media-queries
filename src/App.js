import React, {Component} from 'react';
import './reset.css';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      menuToggle: false
    }

  }

  handleClick = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    })
    console.log(this.state.menuToggle)
  }

  render(){

  return (
    <div className="App">
      <nav>
        <div className='logo'>Start Bootstrap</div>
        <div className='dropdown-menu'>
          <button id='menu-btn' onClick={() => this.handleClick()}>MENU</button>
        </div>
      </nav>

      <img className='background-img' src='https://blackrockdigital.github.io/startbootstrap-agency/assets/img/header-bg.jpg' alt='this' />

      <div className={`dropdown-link ${this.state.menuToggle ? 'dropdown-menu-open' : null}`}>
        <span>Services</span>
        <span>Portfolio</span>
        <span>About</span>
        <span>Team</span>
        <span>Contact</span>
      </div>
      <div>
        <div className='welcome'>

            <span id='studio'>Welcome to our studio!</span>
            <span id='nice'>IT'S NICE TO MEET YOU</span>
            <button id='tell-me'>Tell me more</button>
          
        </div>
      </div>
      <div className='services-container'>
        <span>SERVICES</span>
      </div>
    </div>
  );
  }
}

export default App;
