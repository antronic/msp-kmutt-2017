import React, { Component } from 'react';

import './styles/style.scss';


document.title = 'First Hello! by MSP KMUTT';


class App extends Component {
  randomSplash() {
    const splashMsg = ["1K in 24h!","[DO NOT DISTRIBUTE!]","Finally beta!","Happy new year!","Merry X-mas!","missingno","PC Gamer Demo!","OOoooOOOoooo! Spooky!","Minecraft is love, Minecraft is life","APRIL FOOLS!","700+ hits on YouTube!","Absolutely dragon free!","Almost java 6!","Now java 6!","Now Java 6!","Coming soon!","More than 5000 sold!","More than 25000 sold!","Notch <3 Ez!","\"Noun\" is an autonym!","Now supports ÅÄÖ!","OpenGL 1.1!","OpenGL 1.2!","Rude with two dudes with food!","SOPA means LOSER in Swedish","Superfragilisticexpialidocious!","That\'s not a moon!","Tyrian would love it!","When it\'s finished!","This is good for realms.","Cooler than Spock!","0% sugar!","Now with 100% more yellow text![27]","One star! Deal with it notch!","Haha, LOL!","Play Minecraft, Watch Topgear, Get Pig!","Play minecraftApp, Watch Topgear, Get Pig!","OpenGL ES 1.1!","Almost C++11!"];
    const splash = splashMsg;
    return splash[Math.floor(Math.random()* splash.length)]
  }

  render() {
    return (
      <div>
        <div className="web-bg"></div>
        <div className="header-c container-fluid row">
          <div className="col-6">
            <img src="/msp-kmutt-2017/assets/img/microsoft_PNG19.png" height="70px"/>
          </div>
          <div className="col-6 text-right">
            <img src="/msp-kmutt-2017/assets/img/kmutt-color-wh.png" height="70px"/>
          </div>
        </div>
        <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4 logo">
          <img src="/msp-kmutt-2017/assets/img/minecraft_logo.png" />
          <p className="splash">{this.randomSplash()}</p>
        </div>

        <div className="menu-zone text-center container">
          <div className="button-block col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=3DJEb9IgHUSx26wzgLpjPZwOtisnfgFHmMhIeADx1eBUMFI3RVhFRERZQ1c5VVRVVjNVSVZQOEVLUS4u" className="button">
              <span>Register Now!</span>
            </a>
          </div>

          <div className="content-block col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-left">
            <div className="row">
              <div className="col-5 line"></div>
              <div className="col-2 text-center">
                <a style={{
                  fontSize: '1.5em'
                }} href="https://www.facebook.com/MSPKMUTT/" className="fa fa-facebook-official" aria-hidden="true"></a>
              </div>
              <div className="col-5 line"></div>
            </div>
          </div>

          <div className="content-block col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-left">
            <div className="wrapper">
              <h3 className="title">Date Time</h3>
              <p>Monday&nbsp; 20th&nbsp; November &nbsp;2017</p>
               <p><img src="http://www.minecraftopia.com/images/blocks/clock.png" width="30px" style={{
                 position: 'relative',
                 left: '-5px',
               }}/> 1PM - 5PM</p>
            </div>
          </div>

          <div className="content-block col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-left">
            <div className="wrapper">
              <h3 className="title">Event Place</h3>
              <p>Floor 1, Training Room 1-2, SIT Building</p>
              <p><u>(near KMUTT Library)</u></p>
              <p>King Mongkut's University of Technology Thonburi</p>
            </div>
          </div>

          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.085126665765!2d100.49142161518337!3d13.65258549041175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251a57396f5%3A0x2fd829cd26be9e23!2sSchool+of+Information+Technology%2C+KMUTT!5e0!3m2!1sen!2sth!4v1510586816592" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
