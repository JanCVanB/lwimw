// eslint-disable-next-line no-new, no-unused-vars
var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      audioContext: new AudioContext(),
      sounds: [
        {
          absoluteFrequency: 20,
          position: {
            x: 20,
            y: 20
          }
        },
        {
          absoluteFrequency: 50,
          position: {
            x: 40,
            y: 20
          }
        },
        {
          absoluteFrequency: 100,
          position: {
            x: 60,
            y: 20
          }
        },
        {
          absoluteFrequency: 200,
          position: {
            x: 80,
            y: 20
          }
        },
        {
          absoluteFrequency: 500,
          position: {
            x: 80,
            y: 40
          }
        },
        {
          absoluteFrequency: 1000,
          position: {
            x: 80,
            y: 60
          }
        },
        {
          absoluteFrequency: 2000,
          position: {
            x: 80,
            y: 80
          }
        },
        {
          absoluteFrequency: 5000,
          position: {
            x: 60,
            y: 80
          }
        },
        {
          absoluteFrequency: 10000,
          position: {
            x: 40,
            y: 80
          }
        },
        {
          absoluteFrequency: 20000,
          position: {
            x: 20,
            y: 80
          }
        }
      ]
    }
  },
  components: {
    sound: Sound
  }
})
