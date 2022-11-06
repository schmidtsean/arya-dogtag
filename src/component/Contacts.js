import React from 'react';
import { Button } from 'semantic-ui-react';
import '../App.css';
import '../Img/arya.jpg';

const Contacts = () => {

  return (
    <>
    <img className='background' src={require('../Img/background.JPG')} alt='background1'/> 
   <div className="App">


   <h1 className='intro'>EMERGENCY CONTACTS</h1>

   <p style={{fontFamily:'Pt Sans', fontSize:'17px', fontWeight:'bold'}}>Please call if something bad happened to me and my parents, or if my parents won’t pick up your calls. </p>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:8019491009">
        <h3 className='parent'>Petra Winegar

          <b className='number2'> 
            (801)949-1009
          </b>
        </h3>
        <p className='subParent'>Mamma's Mom</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href='tel:8016359133'>
        <h3 className='parent'>Greg Winegar

          <b className='number2' style={{color:'#915858'}}> 
            (801)635-9133
          </b>
        </h3>
        <p className='subParent'>Mamma's Dad</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
      
     
    <Button className='butt' basic color='black' href="tel:8019168759">
        <h3 className='parent'>Hiroko Schmidt

          <b className='number2' style={{color:'#915858'}}> 
            (801)916-8759
          </b>
        </h3>
        <p className='subParent'>Papa's Mom</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:8019168758">
        <h3 className='parent'>Robert Schmidt

          <b className='number2' style={{color:'#915858'}}> 
            (801)916-8758
          </b>
        </h3>
        <p className='subParent'>Papa's Dad</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:8016185116">
        <h3 className='parent'>Cassie Creer

          <b className='number2' style={{color:'#915858'}}> 
            (801)618-5116
          </b>
        </h3>
        <p className='subParent'>God-Momma</p>

      </Button>
    </div>
      
  
    <Button className='butt' basic color='black' href="tel:6468989110">
        <h3 className='parent'>Adrian Dean

          <b className='number2' style={{color:'#915858'}}> 
            (646)898-9110
          </b>
        </h3>
        <p className='subParent'>God-Papa</p>

      </Button>


      
    </div>
    </>
  );
}

export default Contacts;
