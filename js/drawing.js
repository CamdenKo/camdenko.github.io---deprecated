$(function(){
  var maxX = 300
  var intervalForNewPart = 300//ms 230
  var startingParticles = 3;

  var svgCanvas = $('#particleSVG').get(0)
  var widthSVG = svgCanvas.width.baseVal.value
  var heightSVG = svgCanvas.height.baseVal.value
  svgCanvas.setAttribute('viewBox', '0 0 '+widthSVG+' '+heightSVG)
  svgCanvas.setAttribute('width', '100%')
  svgCanvas.setAttribute('height', '100%')

  var snapSVG = Snap('#particleSVG')

  for(var particleNum = 0; particleNum < startingParticles; particleNum++)
  {
    addParticle(maxX,snapSVG)
  }
  var addingParticles = setInterval(function(){
    addParticle(maxX,snapSVG)
  }, intervalForNewPart)

  easeElementIn($('#name').get(0),500) //1000 increments
  easeElementIn($('#subtitle').get(0),1500)
  easeElementIn($('#git').get(0),2500)
  easeElementIn($('#linkedin').get(0), 3500)
  easeElementIn($('#enter').get(0),4500)
})

var easeElementIn = function(element, time)
{
  setTimeout(function(){
    element.className += ' visible'
  },time)
}

var addParticle = function(maxX, snap)
{
  var tempParticle = new Particle(maxX)
  tempParticle.addToSnap(snap)
}

