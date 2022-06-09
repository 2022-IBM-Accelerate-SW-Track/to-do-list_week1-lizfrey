import React, { Component } from 'react';
import "./About.css";
import picture from "../assets/ElizabethFrey.jpeg";
  
const About= (props)=>{
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={picture}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elizabeth Frey</div>
            <div className="brief_description">
              <p>My name is Elizabeth, and I am a rising junior at Dartmouth College studying Computer Science and Neuroscience. In my free time, I spend time advocating for social entrepreneurship on campus.</p>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default About;