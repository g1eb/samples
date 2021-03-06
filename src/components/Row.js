import React from 'react'

import Sample from './Sample'

import '../styles/row.css'

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {
          this.props.samples.map((sample) => {
            return (
              <Sample
                key={sample.name}
                src={sample.src}
                name={sample.name}
                color={sample.color}
                play={this.props.play}
                update={this.props.update} />
            )
          })
        }
      </div>
    )
  }
}

Row.defaultProps = {
  samples: [],
  play: undefined,
  update: undefined,
}

export default Row
