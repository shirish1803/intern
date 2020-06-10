import React from 'react';
import Card from '../Card';
import './style.css'
import Leftside from '../Leftside';
import Rightside from '../Rightside';
import Leftside2 from '../Leftside2';
import Rightside2 from '../Rightside2';
import Navbar from '../Navbar';

const Hero = () => {
  return (
      <div>
      <Navbar/>
      <br/>
        <div className="container">
            <div>
            <Card>
                <div style={{padding:'50px 0 0 0'}}>
                    <h3 className="heading1">
                        This is heading
                    </h3>
                   
                    <div className="postimageContainer">
                        <img alt="Post image" src={require("../../assets/images/1st.jpg")}/>
                        <hr/>
                        line 1
                        <hr/>
                        line 2
                        <hr/>
                        line 3
                        <hr/>
                    </div>
                    
                </div>         
            </Card> 
            </div>
            <div className="mobileHide">
            <Card>
                <div style={{padding:'50px 0 0 0'}}>
                    <h3 >
                        This box will be hidden in MOBILE DEVICES
                    </h3>
                    <hr/>
                    line 1
                    <hr/>
                    line 2
                    <hr/>
                    line 3
                    <hr/>
                   <br/>
                </div>         
            </Card> 
            </div>
            <section className="container2"> 
                <Leftside/>
                <Rightside/>
            </section>
            <section className="container2">
                <Leftside2/>
                <Rightside2/>
            </section>
            
            
        </div>
        </div>
  )
}

export default Hero