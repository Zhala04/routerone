import React, { Component } from 'react';
import { Top } from './About';

export class Services extends Component {
  render() {
    return (
      <div className='rel'>
        <Top txt='Services' />
        <div className="cards">
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Woman Portrait</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Children Portrait</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-3.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Man Portrait</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-4.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Couple Moment</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-5.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Film & Production</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-6.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Studio Sessions</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-7.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Retouch Photo</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
        <div className="card" style={{width: '19rem', height:'28rem'}}>
        <img src="https://templates.hibootstrap.com/povi/default/assets/img/service/service-8.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className='text-center'>Couple Moment</h4>
          <a href="" className='text-center'><p>VIEW MORE</p></a>
        </div>
      </div>
       
        </div>
        <button className="btn btn-outline-danger bg-danger me-5 ld">LOAD MORE</button>
      </div>
    )
  }
}

export default Services