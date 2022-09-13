import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="subscribe">
        <a className="navbar-brand" href="#"><img src="https://templates.hibootstrap.com/povi/default/assets/img/logo-white.png" alt="" /></a>
       <p>Subscribe to our newsletter for discounts and more latest offer</p>
     <div className="email d-flex ">
     <input type="text" placeholder='Enter Your Email' />
     <button className='btn btn-outline-danger bg-danger me-5 sbs'>SUBSCRIBE NOW</button>
     </div>
       
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>News & Blog</li>
            <li>Our Services</li>
            <li>Our Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>
       <div className="ig">
        <h3>Follow Instagram</h3>
        <div className="ig-img">
          <img src="https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-1.jpg" alt="" />
          <img src="https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-2.jpg" alt="" />
          <img src="https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-3.jpg" alt="" />
          <img src="https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-4.jpg" alt="" />

        </div>
       </div>
        <div className="contactus">
          <h3>Contact Us</h3>
          
          <p><i class="fa-solid fa-location-dot"></i>5961 De Santa Ave, Huntington <br/> Park, CA 90255, USA</p>
          <p><i class="fa-solid fa-phone"></i>+1-3454-5678-77 <br/>+1-6657-2341-12</p>
          <p><i class="fa-solid fa-envelope"></i>hello@povi.com <br/>support@povi.com</p>
        </div>
      </div>
    )
  }
}

export default Footer