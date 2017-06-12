// eslint-disable-next-line no-new, no-unused-vars
var You = {
  render: function (createElement) {
    return createElement(
      'g',
      [
        createElement(
          'circle',
          {
            attrs: {
              cx: this.x,
              cy: this.y,
              fill: 'none',
              stroke: 'black',
              'stroke-width': 0.3,
              r: this.hearingRadius - 8
            }
          }
        ),
        createElement(
          'image',
          {
            attrs: {
              height: this.height,
              width: this.width,
              x: this.x - this.width / 2,
              'xlink:href': 'you.svg',
              y: this.y - this.height / 2
            },
            on: {
              mousedown: this.handleMouseDown,
              mousemove: this.handleMouseMove,
              mouseup: this.handleMouseUp
            },
            style: {
              cursor: (
                this.isMoving
                ? ['-moz-grabbing', '-webkit-grabbing', 'grabbing']
                : ['-moz-grab', '-webkit-grab', 'grab']
              )
            }
          }
        )
      ]
    )
  },
  props: {
    hearingRadius: {
      required: true,
      type: Number
    },
    position: {
      required: true,
      type: Object
    }
  },
  data: function () {
    return {
      height: 20,
      isMoving: false,
      lastClientX: 0,
      lastClientY: 0,
      width: 20,
      x: this.position.x,
      y: this.position.y
    }
  },
  watch: {
    x: function () {
      this.$emit('update:position', {
        x: this.x,
        y: this.y
      })
    },
    y: function () {
      this.$emit('update:position', {
        x: this.x,
        y: this.y
      })
    }
  },
  methods: {
    handleMouseDown: function (event) {
      this.isMoving = true
      this.lastClientX = event.clientX
      this.lastClientY = event.clientY
    },
    handleMouseMove: function (event) {
      if (this.isMoving) {
        this.x += (event.clientX - this.lastClientX) / 3
        this.y += (event.clientY - this.lastClientY) / 3
        this.lastClientX = event.clientX
        this.lastClientY = event.clientY
      }
    },
    handleMouseUp: function () {
      this.isMoving = false
    }
  }
}
