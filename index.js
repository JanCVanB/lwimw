// eslint-disable-next-line no-new, no-unused-vars
var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      audioContext: new AudioContext(),
      sounds: [
        {
          absoluteFrequency: 40,
          position: {
            x: 20,
            y: 20
          }
        },
        {
          absoluteFrequency: 80,
          position: {
            x: 40,
            y: 20
          }
        },
        {
          absoluteFrequency: 160,
          position: {
            x: 60,
            y: 20
          }
        },
        {
          absoluteFrequency: 320,
          position: {
            x: 80,
            y: 20
          }
        },
        {
          absoluteFrequency: 48,
          position: {
            x: 80,
            y: 40
          }
        },
        {
          absoluteFrequency: 96,
          position: {
            x: 80,
            y: 60
          }
        },
        {
          absoluteFrequency: 192,
          position: {
            x: 80,
            y: 80
          }
        },
        {
          absoluteFrequency: 384,
          position: {
            x: 60,
            y: 80
          }
        },
        {
          absoluteFrequency: 60,
          position: {
            x: 40,
            y: 80
          }
        },
        {
          absoluteFrequency: 120,
          position: {
            x: 20,
            y: 80
          }
        },
        {
          absoluteFrequency: 240,
          position: {
            x: 20,
            y: 60
          }
        },
        {
          absoluteFrequency: 480,
          position: {
            x: 20,
            y: 40
          }
        }
      ],
      you: {
        hearingRadius: 30,
        position: {
          x: 50,
          y: 50
        }
      }
    }
  },
  components: {
    sound: Sound,
    you: You
  }
})
