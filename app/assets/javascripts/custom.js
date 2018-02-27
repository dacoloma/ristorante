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
    if (i>0){
      $('.slide-image').animate({left: '+=600px'});
      i-=1;
    }else if (i===0){
      $('.slide-image').animate({left: '-=1200px'});
    }

  });

  $('.next').on('click', function(){
      if (i<2){
        $('.slide-image').animate({left: '-=600px'});
        i+=1;
      }else if (i===2){
        i=0;
        $('.slide-image').animate({left: '+=1200px'});
      }

  });


    setInterval(function () {
      if (i<2){
        console.log('+=', (600*i).toString(), 'px');
        $('.slide-image').animate({left: '-=600px'});
        console.log("i = ", i);
        i+=1;
      }else{
        $('.slide-image').animate({left: '+=' + (600*i).toString() + 'px'});
        i = 0;
      }

    },5000);




});
