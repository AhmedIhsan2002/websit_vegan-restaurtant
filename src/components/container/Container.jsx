import React, { PureComponent } from 'react'
import './Container.css'
class Container extends PureComponent {
  render() {
    return (
      <div className={`Main__Container ${this.props.variant}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Container