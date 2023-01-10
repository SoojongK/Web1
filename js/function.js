$(function(){
    $(window).on('load',function(){
      new WOW().init();
    });
  });//wow plugin reset
  
  $(function(){
    //var
    var $header = $('header');
    var $mnu = $('header>.container>nav>.gnb>li>a');
    var scrollTop = 0;
    var nowIdx = 0;
    var arrTopVal = [];
  
    $('section').each(function(idx){
      arrTopVal[idx] = $(this).offset().top;
    });
  
    //header
    $mnu.on('click',function(event){
      event.preventDefault();
      nowIdx = $mnu.index(this);
  
      $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]
      },500,'easeInOutCubic');
    });
  
    $(window).on('scroll',function(){
      scrollTop = $(this).scrollTop();
  
      if(scrollTop>arrTopVal[0]){
        $header.addClass('active');
      }else{
        $header.removeClass('active');
      }
  
      for(var i=0; i<6; i++){
        if(scrollTop>=arrTopVal[i]){ 
          $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
        }
      }
    });//end of header ecent
  
    //tag
    $tag.on('click',function(event){
      tagIdx = $(this).attr('href');
  
      if(tagIdx=='sub.html'){
        $('#aboutme>.content1-left>a').trigger("click");
  
      }else{
        event.preventDefault();
  
        $('html,body').stop().animate({
          scrollTop : arrTopVal[tagIdx]
        },500,'easeInOutCubic');
      }
    });
  
  });//end of header handler
  
  $(function(){
    //var

  
    var $list = $('#project>.container>.menu>li>a');
    var $listImg = $('#project>.container>.view>li');
    var $viewOpen = $('.viewOpen');
    var $viewClose = $('.viewClose');
    var $viewImg = $('#project>.project_bg>.project_img');
    var $view = $('#project>.project_bg');
  
    var $dePrev = $('#design>.prev');
    var $deNext = $('#design>.next');
    var $design = $('#design>.container>ul');
    var $designs = $('#design>.container>ul>li');
    var $gallOpen = $('.gallOpen');
    var $gallClose = $('.gallClose');
    var $gall = $('#design>.gallery_bg');
    var $gallImg = $('#design>.gallery_bg>.gallery_img');
  
    var nowIdx = 0;
  
  
  
    //project
    $list.on('click',function(event){
      event.preventDefault();
      nowIdx = $list.index(this);
  
      $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      $listImg.fadeOut();
      $listImg.eq(nowIdx).fadeIn();
    });
  
  
    $viewOpen.on('click',function(event){
  
      event.preventDefault();
      var src = $(this).attr('href');
  
      $viewImg.find('a').css({
        backgroundImage : 'url('+src+')'
      });
  
      $viewImg.parent().fadeIn();
    });
  
    $viewClose.on('click',function(event){
      event.preventDefault();
      $viewImg.scrollTop(0)
      $view.fadeOut();
    });
    
    $view.on('click',function(){
      $viewImg.scrollTop(0)
      $view.fadeOut();
    });
    //end of project
  
    //design
    function galleryMove(){
      $designs.eq(nowIdx).stop().animate({left:0,},500,function(){
        $designs.eq(nowIdx).siblings().css({'left':'990px'}).appendTo($design);
      });
    }
  
    $dePrev.on('click',function(){
      if(nowIdx>0){
        nowIdx--;
      }else{
        nowIdx = 2;
      }
  
      galleryMove();
    });
  
    $deNext.on('click',function(){
      if(nowIdx<2){
        nowIdx++;
      }else{
        nowIdx = 0 ;
      }
  
      galleryMove();
    });
  
    $gallOpen.on('click',function(event){
      event.preventDefault();
      var src = $(this).attr('href');
  
      $gallImg.css({
        backgroundImage : 'url('+src+')'
      }).parent().fadeIn();
    });
  
    $gallClose.on('click',function(event){
      event.preventDefault();
      $gall.fadeOut();
    });
  
    $gall.on('click',function(){
      $gall.fadeOut();
    });//end of design
  });//end of section handler