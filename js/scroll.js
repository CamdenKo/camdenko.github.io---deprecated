$(function () {

  $('#homeS').click(function () {
    console.log('click')
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 500)
  })
  $('#eduS').click(function () {
    console.log('click')
    $('html, body').animate({
      scrollTop: $('#education').offset().top
    }, 500)
  })

  $('#eduS').click(function () {
    console.log('click')
    $('html, body').animate({
      scrollTop: $('#education').offset().top
    }, 500)
  })


  $('#expS').click(function () {
    $('html, body').animate({
      scrollTop: $('#experience').offset().top
    }, 500)
  })


  $('#projS').click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 500)
  })


  $('#etcS').click(function () {
    $('html, body').animate({
      scrollTop: $('#etc').offset().top
    }, 500)
  })

  $('#edu1c').click(function () {
    $('#edu1').addClass(" active")
    $('#edu2, #edu3').attr('class', 'sideScrollChild')
  })

  $('#edu2c').click(function () {
    $('#edu2').addClass(" active")
    $('#edu1, #edu3').attr('class', 'sideScrollChild')
  })

  $('#edu3c').click(function () {
    $('#edu3').addClass(" active")
    $('#edu2, #edu1').attr('class', 'sideScrollChild')
  })
})
