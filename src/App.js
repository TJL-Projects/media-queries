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
        <div className='dropdown-menu-btn'>
          <button id='menu-btn' onClick={() => this.handleClick()}>MENU</button>
        </div>
        <div className='nav-links'>
        <span className='link'>SERVICES</span>
        <span className='link'>PORTFOLIO</span>
        <span className='link'>ABOUT</span>
        <span className='link'>TEAM</span>
        <span className='link'>CONTACT</span>
        </div>
      </nav>

      <img className='background-img' src='https://blackrockdigital.github.io/startbootstrap-agency/assets/img/header-bg.jpg' alt='this' />

      <div className={`dropdown-links ${this.state.menuToggle ? 'dropdown-menu-open' : null}`}>
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
        <div className='services-title'>
          <span id='service' className='service-tag'>SERVICES</span>
          <span style={{fontStyle: 'italic', color: 'gray'}} className='service-tag'>Lorem ipsum dolor sit amet consectetur</span>
        </div>
        <div className='e-commerce'>
            <img />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
