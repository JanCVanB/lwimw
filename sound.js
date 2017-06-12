// eslint-disable-next-line no-new, no-unused-vars
var Sound = {
  render: function (createElement) {
    return createElement(
      'circle',
      {
        attrs: {
          cx: this.frequency,
          cy: 1000,
          fill: this.isHovered ? 'black' : 'none',
          stroke: 'black',
          'stroke-width': 5,
          r: 50
        },
        on: {
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave,
          mousemove: this.handleMouseMove,
          mouseover: this.handleMouseOver
        }
      }
    )
  },
  props: {
    audioContext: {
      required: true,
      type: AudioContext
    },
    initialFrequency: {
      required: true,
      type: Number
    }
  },
  data: function () {
    return {
      frequency: this.initialFrequency,
      isHovered: false,
      oscillatorNode: this.audioContext.createOscillator()
    }
  },
  watch: {
    frequency: function (newValue) {
      this.oscillatorNode.frequency.value = newValue
    },
    isHovered: function (newValue) {
      if (newValue) {
        this.oscillatorNode.connect(this.audioContext.destination)
      } else {
        this.oscillatorNode.disconnect(this.audioContext.destination)
      }
    }
  },
  methods: {
    handleMouseEnter: function () {
      this.isHovered = true
    },
    handleMouseLeave: function () {
      this.isHovered = false
    },
    handleMouseOver: function () {
      this.isHovered = true
    }
  },
  mounted: function () {
    this.oscillatorNode.frequency.value = this.frequency
    this.oscillatorNode.start()
  }
}
