import React, { Component } from 'react';

export class Top extends Component{
  render(){
    return(
      <div className="ab-one">
      <div className="ab-onel">
        <h1>{this.props.txt}</h1>
      </div>
      <div className="ab-oner">
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/breadcrumb/br-1.png" alt="" />
      </div>
    </div>
    )
  }
}


export class About extends Component {
  render() {
    return (
      <>
  <Top txt='About Us' />
      <div className="leading">
        <div className="leading-l">
 <img  src="https://templates.hibootstrap.com/povi/default/assets/img/about/about-shape-3.png" className='rotating' alt="" />
 <img className='boy' src="https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-6.png" alt="" />

        </div>
        <div className="leading-r d-flex flex-column justify-content-center">
          <span>ABOUT US</span>
          <h1>We're The Leading Photo Studio <br/> In The Country</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius<br/> 
             en in eros eleme ntum tristique. Duis cursus, mi quis viverra<br/> <br/> 

Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus<br/> 
 isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar<br/> 
  dolor strategic planning dolor sit sectetur.</span>
  <ul>
    <li>Lorem ipsum is not simply random text</li>
    <li>Making this the first true generator on the internet</li>
    <li>various version have evolved these years
</li>
  </ul>
        </div>
      </div>
      </>
    )
  }
}

export default About