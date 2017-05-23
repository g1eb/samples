import React from 'react';

import Row from './components/Row'
import Sample from './components/Sample'
import Container from './components/Container'

import './styles/app.css';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Sample src="" name="sample 1" color="#FF875C" />
          <Sample src="" name="sample 2" color="#FF7847" />
          <Sample src="" name="sample 3" color="#FF6933" />
          <Sample src="" name="sample 4" color="#FF5A1F" />
          <Sample src="" name="sample 5" color="#FF4500" />
        </Row>
        <Row>
          <Sample src="" name="sample 6" color="#70D7FF" />
          <Sample src="" name="sample 7" color="#5CD1FF" />
          <Sample src="" name="sample 8" color="#47CBFF" />
          <Sample src="" name="sample 9" color="#33C5FF" />
          <Sample src="" name="sample 10" color="#1FBFFF" />
        </Row>
        <Row>
          <Sample src="" name="sample 11" color="#C247FF" />
          <Sample src="" name="sample 12" color="#BB33FF" />
          <Sample src="" name="sample 13" color="#B41FFF" />
          <Sample src="" name="sample 14" color="#AD0AFF" />
          <Sample src="" name="sample 15" color="#A300F5" />
        </Row>
      </Container>
    );
  }
}

export default App;
