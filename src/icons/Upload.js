import React from 'react'

class UploadIcon extends React.Component {
  render() {
    return (
    	<svg xmlns="http://www.w3.org/2000/svg"
				className='icon'
				width={this.props.width}
				height={this.props.height}
				viewBox='0 0 20 17'
				aria-labelledby={this.props.title}>
        <title id={this.props.title}>
					{this.props.title}
				</title>
        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
      </svg>
    )
  }
}

UploadIcon.defaultProps = {
  title: 'upload icon',
  width: '1000',
  height: '1000',
}

export default UploadIcon
