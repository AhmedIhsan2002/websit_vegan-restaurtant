import React from 'react'

const ClintsComponents = ({image , number , title }) => {
  return (
    <div>
     <div class="goles-boxs">

            <div class="goles-box">
                <img src={image} alt="" />
                <div class="Number">
                    <h3>{number}</h3>
                    <p>{title}</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default ClintsComponents
