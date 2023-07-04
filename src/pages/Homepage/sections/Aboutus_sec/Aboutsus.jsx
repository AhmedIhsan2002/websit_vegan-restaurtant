import React, { Component } from 'react'
import Container from '../../../../components/container/Container'
import BUTTON from '../../../../components/Button/button'
import './Aboutus.css'
// import './Button.css'
 class Aboutsus extends Component {
  render() {
    return (
      <div>
        <section className='ABOUT-SEC'>
            <Container  className="Main__Container">
            <div className='boxs'>
              
                <div className='box'>
                <div className='contentbox'>
                    <h2>About Us</h2>
                    <h5>Discover the taste of worldclass vegan dishes  from the kitchen of Go Green Dine</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>

                    <BUTTON title="Read More" />

                </div>
                </div>

                <div className='box'>
                    <div className='imgbox'></div>
                </div>
            </div>
            </Container>
        </section>
      </div>
    )
  }
}
export default Aboutsus