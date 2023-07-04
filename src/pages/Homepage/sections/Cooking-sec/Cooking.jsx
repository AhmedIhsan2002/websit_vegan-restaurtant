import React from 'react'
import Container from '../../../../components/container/Container'
import BUTTON from '../../../../components/Button/button'
import Desc from '../../../../components/descrtions_Cards/desc'
import './Cooking.css'
const Cooking = () => {
  return (
    <section className='Cok-sec'>
          <Container  className="Main__Container">
            <div className='boxs'>
              
                <div className='box'>
                <div className='cookinfo'>
                <Desc 
            
            cildern={
              <>
                <h2>Cooking ingredients</h2>
                <h5>What goes in</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.
                </p>
               
              </>
            }
                
                />
                    <BUTTON title="Read More" />

                </div>
                </div>

                <div className='box'>
                    <div className='imgboxing'></div>
                </div>
            </div>
            </Container>
    </section>
  )
}

export default Cooking
