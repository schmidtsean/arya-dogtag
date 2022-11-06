import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../App.css';
import '../Img/arya.jpg';

const About = () => {
  return (
    <>
    <img className='background' src={require('../Img/background.JPG')}/> 
   <div className="App">


        <h1 className='intro'>ABOUT ME</h1>
        <Grid padding='-10%'>
              {/* <Grid.Column width={5}>
              </Grid.Column>
              <Grid.Column width={9}>
              <p>I can have any flavor! My tummy is tough, and I like variety</p>
              </Grid.Column> */}
              
          <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>
            <Grid.Column width={6}>
                <h1 className='title1'>
                  FOOD:
                </h1>
                <h5 className='foods'>I can have any flavor! My tummy is tough, and I like variety</h5>
              </Grid.Column>
              <Grid.Column width={4}>
                <h4 className='numbers'>Orijen
                  <br/>
                <img className='foodpic1' src={require('../Img/orijen.png')}/> 
                  
                </h4>
              </Grid.Column>
              <Grid.Column width={4} >
                <h4 className='numbers'>Sojos
                <br/>
                <img className='foodpic2' src={require('../Img/sojos.png')}/> 
                  
                </h4>
                
              </Grid.Column>
          </Grid.Row>
        </Grid>
       

        <Grid padding='-10%'>
          <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={6}>
                <h1>
                  COMMANDS:
                </h1>
              </Grid.Column>
              <Grid.Column width={7}>
                <ul className='list1'>
                  <li>Sit</li>
                  <li>Down</li>
                  <li>Heel</li>
                </ul>
                <ul className='list2'>
                  <li>Leave It</li>
                  <li>Shake</li>
                  <li>Here</li>
                </ul>
              </Grid.Column>
          </Grid.Row>
        </Grid>

        <h4 className='paragraph'>I am very snuggly and loveable! However, I may be nervous and make a mean face. 
           Please be patient withy me, I miss my mamma and papa! Say a few commands and talk with me while we wait.</h4>
        

      
    </div>
    </>
  );
}

export default About;