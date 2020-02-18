import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from "../assets/img/1.jpg";


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div style={{width: '100%'}}>
        
        </div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={image}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Phren the tech solution</h1>

            <hr/>

          <p>We promise | We Deliver | Giving you the solution you need</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Facebook */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          {/* Twitter */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
