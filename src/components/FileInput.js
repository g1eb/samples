import React from 'react'

import classNames from '../utilities/class'
import '../styles/file-input.css'

import UploadIcon from '../icons/Upload'

class FileInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      drag: false,
    }

    this.dragCounter = 0
  }

  handleDrop(event) {
    event.preventDefault()
    this.props.handleNewFile(event.dataTransfer.files[0])
  }

  handleDragOver(event) {
    event.preventDefault()
  }

  handleDragEnter() {
    this.dragCounter++
    this.setState({'drag': true})
  }

  handleDragLeave() {
    this.dragCounter--
    if ( this.dragCounter === 0 ) {
      this.setState({'drag': false})
    }
  }

  handleFileChange(event) {
    this.props.handleNewFile(event.target.files[0])
  }

  render() {
    return (
      <div className={
          classNames('input-container', {'drag': this.state.drag})
        }
        onDrop={this.handleDrop.bind(this)}
        onDragOver={this.handleDragOver.bind(this)}
        onDragEnter={this.handleDragEnter.bind(this)}
        onDragLeave={this.handleDragLeave.bind(this)}>
        <input type='file' id='file' accept='audio/*'
          onChange={this.handleFileChange.bind(this)} />
        <label htmlFor='file'>
          <UploadIcon width='512' height='512' />
        </label>
      </div>
    )
  }
}

FileInput.defaultProps = {
  handleNewFile: undefined,
}

export default FileInput
