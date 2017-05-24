import React from 'react'
import classNames from '../utilities/class'

import '../styles/sample.css'

class Sample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
      animate: false,
      buffer: undefined,
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({hidden: false})
    }, Math.round(Math.random() * 1000))

    this.animate()

    this.fetchBuffer()
  }

  animate() {
    window.setTimeout(() => {
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

  fetchBuffer() {
    var request = new XMLHttpRequest()
    request.open('GET', this.props.src, true)
    request.responseType = 'arraybuffer'
    request.onload = (data) => {
      this.props.context.decodeAudioData(request.response, (buffer) => {
        this.buffer = buffer
      }, (err) => {
        console.log('sounds err: ', err)
      })
    }
    request.send()
  }

  handleClick() {
    var source = this.props.context.createBufferSource()
    source.connect(this.props.context.destination)
    source.buffer = this.buffer
    source.loop = false
    source.start(0)
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
  context: undefined,
}

export default Sample
