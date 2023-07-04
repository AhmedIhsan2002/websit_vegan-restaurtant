import React, { Component } from 'react'
import './Header.css'
// import logo from '../../../public/assets/images/Rectangle 1.png'
import Container from '../container/Container'
import BUTTON from '../../components/Button/button'
 class Header extends Component {
  render() {
    return (
      <div>
        <>

       
        <header className='Header-sec'>
          <div className='overlay'>
           <Container>
              <div className='navbar'>
              <div className='logo'>
                <img src="assets/images/LOGO.png" alt="" />
              </div>
              <ul class="link">

                <li><a href="">Home</a></li>
                <li ><a href="#aboutus">About Us</a></li>
                <li><a href="">Special</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Blogs</a></li>
                <li className='search'></li>

             </ul>
             <div className="clear"></div>

             <div className='book__now'>
              <div><span></span><h2>Book Now</h2><span></span></div>
             </div>
              </div>

              <div className='content'>
                <h4>Welcome To <br /> Golden View Dine </h4>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                
                <BUTTON title="Read More" />
              </div>
           </Container>
          </div>
        </header>
       
        
        </>
      </div>
    )
  }
}
export default Header