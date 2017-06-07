import React from 'react'

import Row from './components/Row'
import Container from './components/Container'

import AudioService from './services/audio'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      samples: [
        {'src': 'audio/11.mp3', 'name': '81', 'color': '#FF875C'},
        {'src': 'audio/12.mp3', 'name': '87', 'color': '#FF7847'},
        {'src': 'audio/13.mp3', 'name': '69', 'color': '#FF6933'},
        {'src': 'audio/14.mp3', 'name': '82', 'color': '#FF5A1F'},
        {'src': 'audio/15.mp3', 'name': '84', 'color': '#FF4500'},
        {'src': 'audio/21.mp3', 'name': '65', 'color': '#70D7FF'},
        {'src': 'audio/22.mp3', 'name': '83', 'color': '#5CD1FF'},
        {'src': 'audio/23.mp3', 'name': '68', 'color': '#47CBFF'},
        {'src': 'audio/24.mp3', 'name': '70', 'color': '#33C5FF'},
        {'src': 'audio/25.mp3', 'name': '71', 'color': '#1FBFFF'},
        {'src': 'audio/31.mp3', 'name': '90', 'color': '#C247FF'},
        {'src': 'audio/32.mp3', 'name': '88', 'color': '#BB33FF'},
        {'src': 'audio/33.mp3', 'name': '67', 'color': '#B41FFF'},
        {'src': 'audio/34.mp3', 'name': '86', 'color': '#AD0AFF'},
        {'src': 'audio/35.mp3', 'name': '66', 'color': '#A300F5'},
      ]
    }
  }

  componentWillMount() {
    this.service = new AudioService(this.state.samples)
  }

  update(name, file) {
    return this.service.update(name, file)
  }

  play(name) {
    return this.service.play(name)
  }

  render() {
    return (
      <Container>
        <Row play={this.play.bind(this)} update={this.update.bind(this)} samples={this.state.samples.slice(0, 5)} />
        <Row play={this.play.bind(this)} update={this.update.bind(this)} samples={this.state.samples.slice(5, 10)} />
        <Row play={this.play.bind(this)} update={this.update.bind(this)} samples={this.state.samples.slice(10, 15)} />
      </Container>
    )
  }
}

export default App
