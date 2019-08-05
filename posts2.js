function openNav(){document.getElementById("myTopnav").style.left="0"}
function closeNav(){document.getElementById("myTopnav").style.left="-250px"}
var btns=document.getElementsByClassName("dropbtn");for(var i=0;i<btns.length;i++){btns[i].addEventListener("click",function(){var current=document.getElementsByClassName("active");if(current.length>0){current[0].className=current[0].className.replace(" active","")}
this.className+=" active"})}
window.onclick=function(event){if(!event.target.matches('.dropbtn')){var dropdowns=document.getElementsByClassName("dropbtn");var i;for(i=0;i<dropdowns.length;i++){var openDropdown=dropdowns[i];if(openDropdown.classList.contains('active')){openDropdown.classList.remove('active')}}}}
function menuoverlayOn(){document.getElementById("menuoverlay").style.display="block"}
function menuoverlayOff(){document.getElementById("menuoverlay").style.display="none"}
function addClassBody(){var element,name,arr;element=document.body;name="flow";arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}}
function removeClassBody(){var element=document.body;element.className=element.className.replace(/\bflow\b/g,"")}
var lazyaddthis=!1;window.addEventListener("scroll",function(){if((document.documentElement.scrollTop!=0&&lazyaddthis===!1)||(document.body.scrollTop!=0&&lazyaddthis===!1)){(function(){var d=document,s=d.createElement('script');s.src='//'+shortname+'.disqus.com/embed.js';s.setAttribute('data-timestamp',+new Date());(d.head||d.body).appendChild(s)})();lazyaddthis=!0}},!0);function jump(h){var top=document.getElementById(h).offsetTop;window.scrollTo(0,top)}
window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>200||document.documentElement.scrollTop>200){document.getElementById("backToTop").style.display="block"}else{document.getElementById("backToTop").style.display="none"}}
function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0}