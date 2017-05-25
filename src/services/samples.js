class SampleService {

  constructor(samples) {
    this.context = new (window.AudioContext || window.webkitAudioContext)()

    this.buffers = []

    samples.map((sample) => this.fetchBuffer(sample.name, sample.src))
  }

  fetchBuffer(name, url) {
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    request.onload = (data) => {
      this.context.decodeAudioData(request.response, (buffer) => {
        this.buffers[name] = buffer
      }, (err) => {
        console.log('sample service err: ', err)
      })
    }
    request.send()
  }

  play(sample) {
    var source = this.context.createBufferSource()
    source.connect(this.context.destination)
    source.buffer = this.buffers[sample]
    source.loop = false
    source.start(0)
  }
}

export default SampleService
