import React from 'react'
import './Clint.css'

import Container from '../../../../components/container/Container'
import Desc from '../../../../components/descrtions_Cards/desc'
const Clints = () => {
  return (
    <section className='Clint-SEC'>   
      
       <Container>
       
            <div className='boxs'>
                <div className='box'>
                    <img className='img1' alt="" />
                    <div className='Number'>
                        <h3>
                            <Desc number="250+" />
                        </h3>
                        <h2>
                            <Desc title="Delicacy" />
                        </h2>
                    </div>
                </div>
                <div className='box'>
                    <img className='img2' alt="" />
                    <div className='Number'>
                        <h3>
                            <Desc number="250+" />
                        </h3>
                        <h2>
                            <Desc title="renowed chefs" />
                        </h2>
                    </div>
                </div>
                <div className='box'>
                    <img className='img3' alt="" />
                    <div className='Number'>
                        <h3>
                            <Desc number="250+" />
                        </h3>
                        <h2>
                            <Desc title="Members" />
                        </h2>
                    </div>
                </div>
            </div>
       </Container>
    </section>
  )
}

export default Clints
