var gcd = function (a, b) {
  if (!b) {
    return a
  }
  return gcd(b, a % b)
}

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
              fill: this.color,
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
              fill: this.textColor,
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
    },
    youHearingRadius: {
      required: true,
      type: Number
    },
    youPosition: {
      required: true,
      type: Object
    }
  },
  data: function () {
    return {
      gainNode: this.audioContext.createGain(),
      maxVolumePercent: 10,
      oscillatorNode: this.audioContext.createOscillator(),
      relativeFrequency: this.absoluteFrequency,
      volumePercent: 0
    }
  },
  computed: {
    color: function () {
      return (
        'hsla(' +
        this.colorHue + ', ' +
        this.colorSaturation + '%, ' +
        this.colorLightness + '%, ' +
        this.colorAlpha +
        ')'
      )
    },
    colorAlpha: function () {
      return Math.sqrt(this.volumePercent / this.maxVolumePercent)
    },
    colorHue: function () {
      var hue = 290 - 10 * this.relativeFrequency / gcd(this.relativeFrequency, Math.pow(2, 20))
      console.log(this.relativeFrequency, 'makes hue', hue)
      return hue
    },
    colorLightness: function () {
      return 40
    },
    colorSaturation: function () {
      return 100
    },
    textColor: function () {
      return 'black'
    }
  },
  watch: {
    isHovered: function (newValue) {
      if (newValue) {
      } else {
        this.gainNode.disconnect(this.audioContext.destination)
      }
    },
    relativeFrequency: function (newValue) {
      this.oscillatorNode.frequency.value = newValue
    },
    volumePercent: function (newValue) {
      this.gainNode.gain.value = this.volumePercent / 100
    },
    youPosition: function (newValue) {
      var distanceToYou = Math.sqrt(
        Math.pow(this.position.x - this.youPosition.x, 2) +
        Math.pow(this.position.y - this.youPosition.y, 2)
      )
      this.volumePercent = Math.max(
        0,
        this.maxVolumePercent * (
          1 - Math.sqrt(distanceToYou / this.youHearingRadius)
        )
      )
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
    this.gainNode.gain.value = 0
    this.gainNode.connect(this.audioContext.destination)
    this.oscillatorNode.frequency.value = this.relativeFrequency
    this.oscillatorNode.connect(this.gainNode)
    this.oscillatorNode.start()
  }
}
