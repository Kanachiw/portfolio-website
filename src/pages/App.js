//import logo from './logo.svg';
import './styles/App.css'
import Home from './home.js'
import React from 'react';
import Git from './icon/icon_github_.svg'
import Linkedin from './icon/linkedin.svg'
import Mail from './icon/mail.svg'

export function Footer(){
  return(
    <footer className='footer-bar' >

      <div className='footer-text-bar'>
         <div className='footer-text'>
          <p className='footer-text'>
            Personally Designed and Developed 
          </p>

        </div>
        <div className='footer-text'>
        <p className='footer-text'>
        2022 ©COPYRIGHT KANACHI WELI 
          </p>
        </div>
        <div className='footer-text'>
        <p className='footer-text'>
        All Rights Reserved
          </p>
         </div>

      </div>

    </footer>
  )
}
export function ContactBar(){
return(
  <section className='contact-links'>
  <a className='git'href="https://github.com/Kanachiw"> <img src={Git} alt="git hub icon"/></a>
  <a className='linkedin' href='mailto:weli.k@northeastern.edu'> <img src={Mail} alt='email-icon' /></a>
  <a className='linkedin' href="https://www.linkedin.com/in/kanachi-weli/"><img src={Linkedin} alt='linkedin icon'/></a>
</section>
)

}

function App() {
  return (
    <React.Fragment className="App">
      <Home />
    </React.Fragment>
  );
}
export default App;
