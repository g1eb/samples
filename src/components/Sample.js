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

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(event) {
    this.resetAnimation()
    if ( event.keyCode === parseInt(this.props.name, 10) ) {
      this.props.play(this.props.name)
      this.toggleAnimate()
    }
  }

  handleClick() {
    this.resetAnimation()
    this.props.play(this.props.name)
    this.toggleAnimate()
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({hidden: false})
    }, Math.round(Math.random() * 1000))

    this.resetAnimation()
  }

  resetAnimation() {
    window.clearTimeout(this.animationTimeoutId)
    window.clearTimeout(this.idleTimeoutId)
    this.idleTimeoutId = window.setTimeout(() => {
			this.animate()
    }, 1000 * 60)
  }

  animate() {
    this.animationTimeoutId = window.setTimeout(() => {
      this.toggleAnimate()
      this.animate()
    }, Math.ceil(Math.random() * 60) * 1000)
  }

  toggleAnimate() {
    this.setState({animate: true})
    window.setTimeout(() => {
      this.setState({animate: false})
    }, 1000)
  }

  render() {
    return (
      <div
        className={
          classNames('sample', {'hidden': this.state.hidden, 'animate': this.state.animate})
        }
        style={{background: this.props.color}}
        onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
}

Sample.defaultProps = {
  src: '',
  name: '',
  color: '',
  play: undefined,
}

export default Sample
