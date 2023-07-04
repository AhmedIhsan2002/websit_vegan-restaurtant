import React from 'react'
import './Blogs.css'
import Container from '../../../../components/container/Container'
import BUTTON from '../../../../components/Button/button'

const Blogs = () => {
    
  return (
   
    <section className='blogs-sec'>
        <Container>
            <div className='boxs'>
                <div className='box'>
                    <img  className="imgblogs"   />
                  
                </div>
                <div className='box'>
                    <div className='blogstext'>
                        <h4>Come join us for a lunch <br /> this weekend and enjoy</h4>
                        <span>FLAT 10% OFF</span>
                        <BUTTON title="Book Table" />
                    </div>
                </div>
                <div className='box'>
                <img  className="imgblogs"   />
                
                
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Blogs
