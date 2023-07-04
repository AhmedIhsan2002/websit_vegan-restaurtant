import React from 'react'
import './style.css'
import Container from '../../../../components/container/Container'
import Desc from '../../../../components/descrtions_Cards/desc'
import Munu1 from '../../../../mock/Munu1'
import Munu2 from '../../../../mock/Munu2'
import MunuComponents from '../Our_MENU/Munu_Components'
const index = () => {
  return (
   <section>
     <div className="ouermenu">
      <Container>
      <div className="text">
            <Desc 
            
        cildern={
          <>
            <h2>Our Menu</h2>

            <p>Straight From Kitchen</p>
           
          </>
        }
            
            />
          </div>

          <div className='Munu'>
          <div className="box">
            {
             Munu1.map(({id, title, subTitle, image, price}) => (
                <MunuComponents key={id} image={image} title={title} subTitle={subTitle} price={price}/>
              ))
            }
            
          </div>
          <div className='box'>
            {
               Munu2.map(({id, title, subTitle, image, price}) => (
                <MunuComponents key={id} image={image} title={title} subTitle={subTitle} price={price}/>
              ))
            }
          </div>
          </div>
      </Container>
    </div>
   </section>
  )
}

export default index
