// eslint-disable-next-line no-new, no-unused-vars
var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      audioContext: new AudioContext(),
      initialFrequencies: [20, 50, 100, 200, 500, 1000, 2000]
    }
  },
  components: {
    sound: Sound
  }
})
