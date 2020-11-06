
$('.stream__left-footer-scrollable').slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  infinite: true
});

$('.stream__left-help-box a').on('click', function(event){
  event.preventDefault();
  $('.stream , .modal').addClass('modal_active');
  $('body').css('overflow', 'hidden')
})
$('.modal__close .close_icon').on('click', function(){
  $('.stream , .modal').removeClass('modal_active');
  $('body').css('overflow', 'auto');
})

let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

if(isIOS){
  $('body').addClass('isIOS');
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoJy5zdHJlYW1fX2xlZnQtZm9vdGVyLXNjcm9sbGFibGUnKS5zbGljayh7XHJcbiAgc3BlZWQ6IDkwMDAsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMCxcclxuICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGluZmluaXRlOiB0cnVlXHJcbn0pO1xyXG5cclxuJCgnLnN0cmVhbV9fbGVmdC1oZWxwLWJveCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnLnN0cmVhbSAsIC5tb2RhbCcpLmFkZENsYXNzKCdtb2RhbF9hY3RpdmUnKTtcclxuICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG59KVxyXG4kKCcubW9kYWxfX2Nsb3NlIC5jbG9zZV9pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAkKCcuc3RyZWFtICwgLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsX2FjdGl2ZScpO1xyXG4gICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2F1dG8nKTtcclxufSlcclxuXHJcbmxldCBpc0lPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgfHwgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKVxyXG5cclxuaWYoaXNJT1Mpe1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnaXNJT1MnKTtcclxufSJdfQ==
