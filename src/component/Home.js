import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../App.css';
import '../Img/arya.jpg';

const Home = () => {
  return (
    <>
    <img className='background' src={require('../Img/background.JPG')}/> 
   <div className="App">


        <h1 className='intro'>Hi, I'M ARYA</h1>
        <h3 className='subhead'>If you found me, I am lost!
          <br/>
         Please contact my parents.</h3>
         
    <div className='wrap'>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <h4 className='number'>MAMMA
        <br/>
        | <a href="tel:3854149814" style={{color:'#915858'}}> 
           (385) 414-9814
        </a> | 
        </h4>
        </Grid.Column>
        <Grid.Column>
        <h4 className='number'>PAPA
          <br/>
        | <a href="tel:8017553015" style={{color:'#915858'}}> 
          (801) 755-3015
        </a> |
        </h4>
          </Grid.Column>
        </Grid.Row>


        
        </Grid>
        </div>
        <div>
      <img className='photo' src={require('../Img/arya.png')}/>
      </div>
      <h3 className='number'>FOR EMERGENCIES, PLEASE CONTACT</h3>
      <h4 className='number'>Avenues Pet Clinic |
        <a href='tel:(801)364-3475' style={{color:'#915858'}}>
          +1 (801)364-3475 
        </a>
      </h4>

      
    </div>
    </>
  );
}

export default Home;
