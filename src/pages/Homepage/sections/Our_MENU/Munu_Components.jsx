import React from 'react'

const MunuComponents = ({image, title, subTitle, price }) => {
  return (
    <>
      <div className='Sub__Munu'>
    <div className="info">
      <img src={image} alt="food" />
      <div className='text'>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    </div>
    <div className="price">
      <span></span>
      <span>{price}</span>
    </div>
  </div>

  
    </>
  )
}

export default MunuComponents
