var n=document.querySelector(".slider-compare");if(n){let t=document.querySelector(".slider-compare__scrubber"),o=document.querySelector(".slider-compare__image--before"),s=document.querySelector(".slider-compare__image--after");t.ondragstart=function(){return!1},t.onmousedown=function(i){i.preventDefault();let d=i.clientX-t.getBoundingClientRect().left;document.addEventListener("mousemove",r),document.addEventListener("mouseup",c);function r(u){let e=u.clientX-d-n.getBoundingClientRect().left+20;e<0&&(e=0);let l=n.offsetWidth-t.offsetWidth+40;e>l&&(e=l),t.style.left=`${e}px`,o.style.clipPath=`inset(0 ${n.offsetWidth-e}px 0 0)`,s.style.clipPath=`inset(0 0 0 ${e}px)`}function c(){document.removeEventListener("mouseup",c),document.removeEventListener("mousemove",r)}},window.addEventListener("resize",()=>{t.style.left="50%",o.style.clipPath="inset(0 50% 0 0)",s.style.clipPath="inset(0 0 0 50%)"})}
