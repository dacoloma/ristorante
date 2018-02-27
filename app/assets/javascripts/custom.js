$(document).ready(() => {
  const $button1 = $('#1');
  const $button2 = $('#2');
  const $button3 = $('#3');
  var i=0;

  $button1.on('click', () => {
    if ($('.menu').attr("style") === 'display: block;') {
      $('.menu').slideUp("slow", () =>{
        $('.presentation').slideToggle();
      });
    }else if ($('.adresse').attr("style") === 'display: block;'){
      $('.adresse').slideUp("slow", () => {
        $('.presentation').slideToggle();
      });
    }else{
      $('.presentation').slideToggle();
    }

  });

  $button2.on('click', () => {
    //console.log($('.presentation').attr("style") === 'display: block;');
    if ($('.presentation').attr("style") === 'display: block;') {
      $('.presentation').slideUp("slow", () =>{
        $('.menu').slideToggle();
      });
    }else if ($('.adresse').attr("style") === 'display: block;'){
      $('.adresse').slideUp("slow", () => {
        $('.menu').slideToggle();
      });
    }else{
      $('.menu').slideToggle();
    }
  });

  $button3.on('click', () => {
    if ($('.presentation').attr("style") === 'display: block;') {
      $('.presentation').slideUp("slow", () =>{
        $('.adresse').slideToggle();
      });
    }else if ($('.menu').attr("style") === 'display: block;'){
      $('.menu').slideUp("slow", () => {
        $('.adresse').slideToggle();
      });
    }else{
      $('.adresse').slideToggle();
    }

  });

  $('.prev').on('click', function(){
    $('.slide-image').animate({left: '+=600px'});
    i-=1;
  });

  $('.next').on('click', function(){
    $('.slide-image').animate({left: '-=600px'});
    i+=1;
  });

  //while(i<2){
    setInterval(function () {
      $('.slide-image').animate({left: '-=600px'},1000);

    },2000);
    //i+=1;


  //}


});
