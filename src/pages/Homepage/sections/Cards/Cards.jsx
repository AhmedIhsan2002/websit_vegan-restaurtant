import React, { Component } from 'react'
import './Cards.css'
import Desc  from '../../../../components/descrtions_Cards/desc'
 class Cards extends Component {
  render() {
    return (
      <div>
        <section className='Cards-sec'>
          <div className="text">
            <Desc 
            
        cildern={
          <>
            <h2>Special</h2>

            <p>What makes us special</p>
           
          </>
        }
            
            />
          </div>
        <div className='boxs'>
        <div className='box'>
            <div className='content-box'>
            <div className='food' ></div>
                <h3>Fresh food</h3>
                <Desc describetion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, et id. Quae ullam cupiditate enim fuga similique. Quos, libero delectus! Dicta ut iste blanditiis aperiam rem obcaecati velit sit adipisci?" />
            </div>
        </div>
        <div className='box'>
            <div className='content-box'>
               <div className='food2' ></div>
                <h3>Exotic dishes</h3>
                <Desc describetion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, et id. Quae ullam cupiditate enim fuga similique. Quos, libero delectus! Dicta ut iste blanditiis aperiam rem obcaecati velit sit adipisci?" />
            </div>
        </div>
        <div className='box'>
            <div className='content-box'>
            <div className='food3'></div>
                <h3>skilled Chef</h3>
                <Desc describetion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, et id. Quae ullam cupiditate enim fuga similique. Quos, libero delectus! Dicta ut iste blanditiis aperiam rem obcaecati velit sit adipisci?" />
            </div>
        </div>
        </div>
        </section>
      </div>
    )
  }
}
export default Cards