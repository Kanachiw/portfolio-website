import React from 'react';
import {Link} from 'react-router-dom'
import './styles/home.css'
import './styles/App.css'
import {Footer, ContactBar} from './App.js'
import Profilepic from './images/profile-pic.png'



function Home(){
return(
    <React.Fragment>
      
        <nav className='link-bar'>

        <div id='gd' className='nav-links'> <Link className="links" to='/graphicDesign'> Designs </Link></div>
        <div id='pr'className='nav-links'> <Link className="links" to='/engineeringProjects'> Projects </Link></div>
        <div id='dt'className='nav-links'><Link className="links" to='/dataAnalytics'> Data  </Link></div>
        <div id='rs' className='nav-links'><Link className="links" to='/resume_portfolio.pdf'> Resume</Link></div>
        </nav>
        
        <div className='content'>

        <section className='body-content-area' id='move-content'>

            <div className="Pageheading"> 
            <h1 className="Pageheading">Kanachi Weli </h1>
            </div>


            <div className='Page_Subheading'>
            <h3 className='PageSubheading'>Aspiring UI/UX Designer & Web Developer</h3>
            </div>
         
           <ContactBar  />
          


            <div className='bio-text'>
            <p className='bio-text'>Hi! I am a junior at Northeastern studying Computer Engineering with a minor in Computational Data Analytics. My hobbies include sewing, knitting, crocheting, running and listening to music. Some of my career interests include UI Design, cloud computing, full-stack web & mobile development, machine learning, robotics and aerospace/aviation.</p>
        
            </div>

            <div className='bio-text-2'>
          <p className='bio-text-2'>
                📍 Catch me in Atlanta, Georgia (Fall 2022) </p>
            </div>
        </section>
        <img className="profile-pic" 
        alt='a girl with blonde braids. she is wearing an orange dress and carrying an orange purse. Infront of a cloud'
        src={Profilepic}/>
    </div>
       <Footer />
    </React.Fragment>
)
}
export default Home;