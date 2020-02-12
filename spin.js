var spinners = require('./spinners')
var colors = require('colors');
function Spin(placeholder, type, color) {
  if (!(this instanceof Spin)) return new Spin(placeholder, type, color)

  this.pos = 0
  this.placeholder = placeholder || ''
  this.type = type || 'Spin1'
  this.color = color || 'blue'
}

Spin.prototype = {
  counstructor: Spin,
  start: function () {
    this.spinner = spinners[this.type]
    this.loop = setInterval(function () {
      process.stdout.write(colors[this.color](`\r${this.spinner[this.pos]} ${this.placeholder}`))
      this.pos = ++this.pos % this.spinner.length
    }.bind(this), 100)
    return this
  },
  stop: function () {
    process.stdout.clearLine()
    process.stdout.write('\r')
    clearInterval(this.loop)
    return this
  },
  update: function (placeholder) {
    process.stdout.clearLine()
    this.placeholder = placeholder + ' '
    return this
  }
}

module.exports = Spin
