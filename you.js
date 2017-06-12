// eslint-disable-next-line no-new, no-unused-vars
var You = {
  render: function (createElement) {
    return createElement(
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
  },
  data: function () {
    return {
      height: 20,
      isMoving: false,
      lastClientX: 0,
      lastClientY: 0,
      width: 20,
      x: 50,
      y: 50
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
