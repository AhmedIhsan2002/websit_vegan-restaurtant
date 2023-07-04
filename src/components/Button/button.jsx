import React, { Component } from 'react'
import './Button.css'
 class BUTTON extends Component {
  render() {
    return (
      <div>
        <button>{this.props.title}</button>
      </div>
    )
  }
}
export default BUTTON