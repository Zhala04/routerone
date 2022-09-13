import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export class Nav extends Component {
  constructor(props){
    super(props);
    // this.func=this.func.bind(this);
    this.dark=this.dark.bind(this);
    this.light=this.light.bind(this);
    this.state={
      clas:'btn btn-dark bg-dark dr',
      mod:true
      
    }
  
  }
dark(){
  this.setState({
    clas:'btn btn-dark bg-dark dr',
    mod:true
    
  })
}
light(){
  this.setState({
    clas:'btn btn-light dr',
    mod:false
    
  })
}
  
  render() {
    const mod=this.state.mod;
    const clas=this.state.clas;
    let buton;
    if(mod){
      buton=<button onClick={this.light} className={clas} >light</button>
      
    }else if(!mod){
      buton=<button onClick={this.dark} className={clas} >dark</button>
    }
    return (
      <div className='navis'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#"><img src="https://templates.hibootstrap.com/povi/default/assets/img/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/services">Services</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/pages">Pages</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
             
            </ul>
            <form className="d-flex">
            {/* <button className={this.state.class} onClick={this.func}>dark</button> */}
            {buton}
              <button className="btn btn-outline-danger bg-danger me-5 dn" type="button">BOOK NOW</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Nav