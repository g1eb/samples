import React from 'react'

import classNames from '../utilities/class'
import '../styles/sample.css'

import UploadIcon from '../icons/Upload'

class Sample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: false,
      hidden: true,
      animate: false,
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(event) {
    if ( event.keyCode === 27 ) {
      this.setState({'input': false})
    } else {
      this.resetAnimation()
      if ( event.keyCode === parseInt(this.props.name, 10) ) {
        this.setState({animate: true})
        this.props.play(this.props.name).then(() => {
          this.setState({animate: false})
        })
      }
    }
  }

  handleMouseDown() {
    this.resetAnimation()
    this.setState({animate: true})
    this.props.play(this.props.name).then(() => {
      this.setState({animate: false})
    })

    this.inputTimeoutId = window.setTimeout(() => {
      this.setState({input: true})
    }, 1000)
  }

  handleMouseUp() {
    window.clearTimeout(this.inputTimeoutId)
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

  renderInput() {
    if ( this.state.input ) {
      return (
        <div>
          <input type='file' name='file' id='file' />
          <label htmlFor='file'>
            <UploadIcon width='20' height='17' />
          </label>
        </div>
      )
    }
  }

  render() {
    return (
      <div
        className={
          classNames('sample', {
            'input': this.state.input,
            'hidden': this.state.hidden,
            'animate': this.state.animate
          })
        }
        style={{background: this.props.color}}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}>
        {this.renderInput()}
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
