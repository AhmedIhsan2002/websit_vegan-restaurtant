import React, { Component } from 'react'

 class Desc extends Component {
  render() {
    const {
     describetion ,
     cildern,
     number,
     title
    } = this.props
    return (
      <>
        <div>
        <p style={{
            fontSize: "20px",
            lineHeight:"24px",
            color:'#fff',
            marginBottom: 0,
            wordSpacing:2,
            textAlign:'justify'
           

        }}>{describetion}</p>

        <div>{cildern}</div>

        <div>
          <h3>{number}</h3>
          <h2>{title}</h2>

        </div>
      </div>
      
    
    </>
    )
  }
}
export default Desc
