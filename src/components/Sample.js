import React from 'react'
import classNames from '../utilities/class'

import '../styles/sample.css'

class Sample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
    }

    window.setTimeout(() => {
      this.setState({hidden: false})
    }, Math.round(Math.random() * 1000))
  }

  handleClick() {
    console.log(`clicked on sample: ${this.props.name}`);
  }

  render() {
    return (
      <div
        className={ classNames('sample', {'hidden': this.state.hidden}) }
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
