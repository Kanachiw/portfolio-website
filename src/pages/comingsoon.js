import React from "react"
import {Link} from 'react-router-dom';
import  './styles/comingsoon.css'
import Picture from './images/comingsoon.png'
import {Footer, ContactBar} from './App.js'


function ComingSoon(props){
    return(
        <React.Fragment >
            <div className="coming-soon-container">
               <div className="body-content-area-nf">
                <div className="Pageheading-nf">
                    <h1 className="title-nf">Not Quite Done...</h1>
                </div>



                <div className="Page_Subheading-nf">
                    <h3 className="sorry-nf">Sorry the {props.pagetitle} page is still in development </h3>
                </div>
                
                <ContactBar className="contact-nf" />
                <div className="sorry-text">
                    <p className="sorry-p-nf">You can check out all of my projects on my git and Linkedin. If you have any questions, you can contact me on my email. </p>
                </div>      
                <div className="back-home-div">
                <button className="back-home">
                 <Link  className="home-link-text" to="/"> Home </Link>
                </button>

                </div>
               </div>

                <img src={Picture} alt="girl sitting on a cloud with the words coming soon "/> 
            </div>
            <Footer />
            
        </React.Fragment>
    )

}
export default ComingSoon