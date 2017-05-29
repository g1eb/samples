import React from 'react'

class UploadIcon extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        className='icon'
        width={this.props.width}
        height={this.props.height}
        viewBox='0 0 512 512'
        aria-labelledby={this.props.title}>
        <title id={this.props.title}>
          {this.props.title}
        </title>
        <path d="M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5  c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,91,89.5,91H224v-80l-48.2,0l80.2-83.7l80.2,83.6l-48.2,0v80  h110.3c45.2,0,81.7-37.5,81.7-83.4C480,270.6,443.3,233.3,398.1,233.2z"/>
      </svg>
    )
  }
}

UploadIcon.defaultProps = {
  title: 'upload icon',
  width: '512',
  height: '512',
}

export default UploadIcon
