'use strict';

var app = {

  samples: [{
    name: 'Piano 1',
    color: 'rgb(205, 35, 39)',
    src: window.location.href + '/dist/sounds/p1.wav',
  }, {
    name: 'Piano 2',
    color: 'rgb(205, 35, 39)',
    src: window.location.href + '/dist/sounds/p2.wav',
  }, {
    name: 'Piano 3',
    color: 'rgb(205, 35, 39)',
    src: window.location.href + '/dist/sounds/p3.wav',
  }, {
    name: 'Piano 4',
    color: 'rgb(205, 35, 39)',
    src: window.location.href + '/dist/sounds/p4.wav',
  }, {
    name: 'Piano 5',
    color: 'rgb(205, 35, 39)',
    src: window.location.href + '/dist/sounds/p5.wav',
  }],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'container';
    document.body.appendChild(app.container);

    for ( var i = 0; i < app.samples.length; i++ ) {
      app.add(app.samples[i]);
    }
  },

  add: function (sample) {
    var element = document.createElement('div');
    element.classList.add('hidden');
    element.setAttribute('style', 'background:'+sample.color);
    app.container.appendChild(element);

    var timeout = Math.round(Math.random() * 1000);
    window.setTimeout(function () {
      element.classList.remove('hidden');
      app.animate(element);
    }, timeout, element);
  },

  animate: function (element) {
    var timeout = Math.ceil(Math.random() * 25) * 1000;
    for ( var i = 0; i < element.children.length; i++ ) {
      if ( element.children[i].nodeName.toLowerCase() !== 'img' ) {
        element.children[i].style.transitionDuration = timeout + 'ms';
        var rotation = Math.round(Math.random()) * 4 - 2;
        element.children[i].style.transform = 'rotate('+rotation+'deg)';
      }
    }

    window.setTimeout(function (element) {
      element.classList.toggle('animate');
      app.animate(element);
    }, timeout, element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);
