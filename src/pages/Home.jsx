import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <>
      <div className="hero">
        <div className="hero-left">
          <span>PROFESSIONAL PHOTOGRAPHY SERVICES</span>
          <h1>Capture Love, Joy & <br/> Everything With Us</h1>
          <span>It is a long established fact that a reader will be distracted by the reale he<br/>
           point of using Lorem Ipsum is that it has a more-or-less normal valid.</span>
           <button className='btn btn-outline-danger bg-danger me-5 hbt'>GET STARTED</button>
        </div>
        <div className="hero-right">
          <img src="https://templates.hibootstrap.com/povi/default/assets/img/hero/hero-img-1.png" alt="" />
        </div>
      </div>
      </>
    )
  }
}

export default Home