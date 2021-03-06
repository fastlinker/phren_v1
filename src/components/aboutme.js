import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from "../assets/img/1.jpg";

class About extends Component {
  render() {
    return(
      <Grid>
      <Cell col={12}>
            <div style={{textAlign: 'center'}}>
              <img
                src={image}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Paul Hanna</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type 
               specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
        </Grid>
    )
  }
}

export default About;
