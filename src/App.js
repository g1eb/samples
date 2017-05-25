import React from 'react'

import Row from './components/Row'
import Container from './components/Container'

import AudioService from './services/audio'

import './styles/app.css'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      samples: [
        {'src': '/sounds/11.mp3', 'name': 'sample 11', 'color': '#FF875C'},
        {'src': '/sounds/12.mp3', 'name': 'sample 12', 'color': '#FF7847'},
        {'src': '/sounds/13.mp3', 'name': 'sample 13', 'color': '#FF6933'},
        {'src': '/sounds/14.mp3', 'name': 'sample 14', 'color': '#FF5A1F'},
        {'src': '/sounds/15.mp3', 'name': 'sample 15', 'color': '#FF4500'},
        {'src': '/sounds/21.mp3', 'name': 'sample 21', 'color': '#70D7FF'},
        {'src': '/sounds/22.mp3', 'name': 'sample 22', 'color': '#5CD1FF'},
        {'src': '/sounds/23.mp3', 'name': 'sample 23', 'color': '#47CBFF'},
        {'src': '/sounds/24.mp3', 'name': 'sample 24', 'color': '#33C5FF'},
        {'src': '/sounds/25.mp3', 'name': 'sample 25', 'color': '#1FBFFF'},
        {'src': '/sounds/31.mp3', 'name': 'sample 31', 'color': '#C247FF'},
        {'src': '/sounds/32.mp3', 'name': 'sample 32', 'color': '#BB33FF'},
        {'src': '/sounds/33.mp3', 'name': 'sample 33', 'color': '#B41FFF'},
        {'src': '/sounds/34.mp3', 'name': 'sample 34', 'color': '#AD0AFF'},
        {'src': '/sounds/35.mp3', 'name': 'sample 35', 'color': '#A300F5'},
      ]
    }
  }

  componentWillMount() {
    this.service = new AudioService(this.state.samples)
  }

  play(name) {
    this.service.play(name)
  }

  render() {
    return (
      <Container>
        <Row play={this.play.bind(this)} samples={this.state.samples.slice(0, 5)} />
        <Row play={this.play.bind(this)} samples={this.state.samples.slice(5, 10)} />
        <Row play={this.play.bind(this)} samples={this.state.samples.slice(10, 15)} />
      </Container>
    )
  }
}

export default App
