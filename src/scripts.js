$(function(){
      

  window.addEventListener('resize',collapseMessages)

  function collapseMessages(){
    if($(window).width()>576){
      $("#message-container-01").css('display','block');
    }
    else if($(window).width()<576){
      $("#message-container-01").css('display','none');
    }
  }

  $("#expand-message-01").click(function(){        
        if($("#message-container-01").css("display")=='none' && $(window).width() < 576){
            $("#message-container-01").css('display','block');
        }
        else if($("#message-container-01").css("display")=='block' && $(window).width() < 576){
          $("#message-container-01").css('display','none');
        }
        else{
          return;
        }
    });

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
});