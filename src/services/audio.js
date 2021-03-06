class AudioService {

  constructor(samples) {
    this.context = new (window.AudioContext || window.webkitAudioContext)()

    this.buffers = {}

    let promises = samples.map((sample) => this.fetchBuffer(sample.name, sample.src))
    Promise.all(promises).then(() => {
      this.ready = true
    })
  }

  fetchBuffer(name, url) {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.responseType = 'arraybuffer'
      request.onload = (data) => {
        this.context.decodeAudioData(request.response, (buffer) => {
          this.buffers[name] = buffer
          resolve()
        }, (err) => {
          reject(`sample service err: ${err}`)
        })
      }
      request.send()
    })
  }

  play(name) {
    return new Promise((resolve, reject) => {
      if ( !!this.ready && !!this.buffers[name] ) {
        var source = this.context.createBufferSource()
        source.connect(this.context.destination)
        source.buffer = this.buffers[name]
        source.start(0)
        source.onended = () => {
          resolve()
        }
      } else {
        reject()
      }
    })
  }

  update(name, file) {
    return new Promise((resolve, reject) => {
      if ( !!this.ready && !!this.buffers[name] ) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.context.decodeAudioData(event.target.result, (buffer) => {
            this.buffers[name] = buffer
            resolve()
          }, (err) => {
            reject(`sample service err: ${err}`)
          })
        }
        reader.readAsArrayBuffer(file)
      } else {
        reject()
      }
    })
  }
}

export default AudioService
