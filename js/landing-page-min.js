$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo");b.preventDefault()})});$("body").scrollspy({target:".navbar-fixed-top"});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});$("div.modal").on("show.bs.modal",function(){var a=this;var b=a.id;window.location.hash=b;window.onhashchange=function(){if(!location.hash){$(a).modal("hide")}}});