// eslint-disable-next-line no-new, no-unused-vars
var Sound = {
  render: function (createElement) {
    return createElement(
      'g',
      {
        on: {
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave,
          mouseover: this.handleMouseOver
        }
      },
      [
        createElement(
          'circle',
          {
            attrs: {
              cx: this.position.x,
              cy: this.position.y,
              fill: this.isHovered ? 'black' : 'none',
              stroke: 'black',
              'stroke-width': 0.3,
              r: 8
            }
          }
        ),
        createElement(
          'text',
          {
            attrs: {
              dy: '1px',
              'font-size': '3px',
              fill: this.isHovered ? 'white' : 'black',
              x: this.position.x,
              y: this.position.y,
              'text-anchor': 'middle'
            }
          },
          [
            this.relativeFrequency + ' Hz'
          ]
        )
      ]
    )
  },
  props: {
    absoluteFrequency: {
      required: true,
      type: Number
    },
    audioContext: {
      required: true,
      type: AudioContext
    },
    position: {
      required: true,
      type: Object
    }
  },
  data: function () {
    return {
      isHovered: false,
      oscillatorNode: this.audioContext.createOscillator(),
      relativeFrequency: this.absoluteFrequency
    }
  },
  watch: {
    isHovered: function (newValue) {
      if (newValue) {
        this.oscillatorNode.connect(this.audioContext.destination)
      } else {
        this.oscillatorNode.disconnect(this.audioContext.destination)
      }
    },
    relativeFrequency: function (newValue) {
      this.oscillatorNode.frequency.value = newValue
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
    this.oscillatorNode.frequency.value = this.relativeFrequency
    this.oscillatorNode.start()
  }
}
