import React from 'react'
import classNames from '../utilities/class'

import '../styles/sample.css'

class Sample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
      animate: false,
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({hidden: false})
    }, Math.round(Math.random() * 1000))

    this.animate()
  }

  animate() {
    window.setTimeout(() => {
      this.toggleAnimate()
      this.animate()
    }, Math.ceil(Math.random() * 25) * 1000)
  }

  toggleAnimate() {
    this.setState({animate: true})
    window.setTimeout(() => {
      this.setState({animate: false})
    }, 1000)
  }

  handleClick() {
    console.log(`clicked on sample: ${this.props.name}`)
  }

  render() {
    return (
      <div
        className={ classNames('sample', {'hidden': this.state.hidden, 'animate': this.state.animate}) }
        style={{background: this.props.color}}
        onClick={(event) => this.handleClick()}>
      </div>
    )
  }
}

Sample.defaultProps = {
  src: '',
  name: '',
  color: '',
}

export default Sample
