import React from 'react'

import '../styles/sample.css'

class Sample extends React.Component {

  handleClick() {
    console.log(`clicked on sample: ${this.props.name}`);
  }

  render() {
    return (
      <div
        className="sample"
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
