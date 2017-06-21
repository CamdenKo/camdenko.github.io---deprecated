//colors http://www.colorhunt.co/c/7642
// #F38181 - background
// #FCE38A #EAFFD0 #95E1D3

var colors = ['#FCE38A', '#EAFFD0', '#95E1D3']

function Particle(maxX, snap, radius, color, opacity) {
  this.radius = radius || generateRadius(5, 25)
  this.color = color || randomColorChooser()
  this.opacity = opacity || generateOpacity(.5)
  this.x = Math.floor(Math.random() * maxX) || 100
  this.y = 270

  this.animationTime = generateAnimationTime(11000, 2000)
}

Particle.prototype.addToSnap = function (snap) {
  var out = snap.circle(this.x, this.y, this.radius) //x y radius
  out.attr({
    fill: this.color,
    fillOpacity: this.opacity,
  })

  out.animate({
    transform: 't0 -330'
  }, this.animationTime)

  var fadeStart = this.animationTime / 2 - 1000;
  var fadeLength = this.animationTime - fadeStart;
  setTimeout(function () {
    out.animate({
      opacity: '0',
    }, fadeLength - 200) //((opacity, animatoin length), start time)
  }, fadeStart)
  setTimeout(function () {
    out.remove()
  }, this.animationTime)
  return out
}

var generateAnimationTime = function (maxTime, range) {
  return Math.floor(Math.random() * range + maxTime - range)
}

var generateLifeTime = function (maxLife) {
  return Math.ceil(Math.random() * maxLife)
}

var generateRadius = function (minSize, maxSize) {
  return Math.ceil((maxSize - minSize) * Math.random() + minSize)
}

var generateOpacity = function (minOpacity) {
  return ((1 - minOpacity) * Math.random() + minOpacity)
}

var randomColorChooser = function () {
  return colors[Math.floor(Math.random() * colors.length)]
}
