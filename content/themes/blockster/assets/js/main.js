!function e(t,a,o){function s(n,i){if(!a[n]){if(!t[n]){var c="function"==typeof require&&require;if(!i&&c)return c(n,!0);if(r)return r(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var p=a[n]={exports:{}};t[n][0].call(p.exports,function(e){var a=t[n][1][e];return s(a?a:e)},p,p.exports,e,t,a,o)}return a[n].exports}for(var r="function"==typeof require&&require,n=0;n<o.length;n++)s(o[n]);return s}({"./assets-src/scripts/main/index.js":[function(e){var t=$("body"),a=-1!==navigator.userAgent.indexOf("Mac OS X");a||e("./smooth_wheel"),e("./Entry_global"),t.hasClass("home-template")&&e("./Entry_home"),(t.hasClass("post-template")||t.hasClass("page-template"))&&e("./Entry_pages")},{"./Entry_global":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_global.js","./Entry_home":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_home.js","./Entry_pages":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_pages.js","./smooth_wheel":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/smooth_wheel.js"}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/helpers.js":[function(e,t,a){a.fitVidInit=function(){$("body").find(".video").wrap('<div class="video-wrap"></div>'),$(".video-wrap").fitVids()},a.addRemoveClass=function(e,t,a){a===!0?e.addClass(t):e.removeClass(t)},a.setLink=function(e,t){e.attr("href",t)},a.checkFalseAndRemove=function(e,t){e===!1&&t.remove()},a.sortAlpha=function(e,t){return e.toLowerCase()>t.toLowerCase()?1:-1},a.input_checkAndSet=function(e,t,a){e.length?(t.append(e),o(a),e.value&&e.length&&e.remove(),s("p")):t.parent().remove()},a.removeTag=function(e){o(e)},a.removeEmptyTag=function(e){s(e)},a.sayHello=function(e){console.log(e)},a.setImagesAsTags=function(){$(".post-excerpt--featured-img").each(function(){var e=$(this);$(".image-as-element",e).show(),$(".image-as-element",e).attr("width",500),$(".image-as-element",e).attr("height",800)})},a.setImagesAsBg=function(){$(".post-excerpt-box--wrap").each(function(){var e=$(this);e.hasClass("tag-height2x")&&e.attr("data-size","height2x"),e.hasClass("tag-width2x")&&e.attr("data-size","width2x"),e.hasClass("tag-square2x")&&e.attr("data-size","square2x"),$(".post-excerpt--featured-img",e).hasClass("lazy")&&($("img.image-as-element",e).hide(),$(".post-excerpt--featured-img",e).addClass("featured-with-bg-img"),$(".post-excerpt",e).addClass("post-excerpt-with-bg-img"))})},a.toggleActiveBtn=function(e){{var t=$(e);$(this)}t.siblings(".active").removeClass("active"),t.addClass("active")};var o=function(e){for(var t=document.getElementsByTagName(e);t.length;){for(var a=t[0].parentNode;t[0].firstChild;)a.insertBefore(t[0].firstChild,t[0]);a.removeChild(t[0])}},s=function(e){$(e).each(function(){""===$.trim($(this).text())&&$(this).remove()})}},{}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_global.js":[function(e){function t(){$(".bar-iso").removeClass("active")}e("./ajax_svgIcons");var a=e("./../helpers.js");$(function(){FastClick.attach(document.body)});var o=$('[data-target="#tag-wrap"]'),s=$('[data-target="#sort-wrap"]'),r=$("#tag-wrap"),n=$("#sort-wrap");$(".toggleOpen").on("click",function(e){e.preventDefault();var t=$(this);!r.hasClass("open")&&!n.hasClass("open")||t.parent().hasClass("active")?($(t.data("target")).toggleClass("open"),t.parent(t).toggleClass("active")):r.hasClass("open")?(r.removeClass("open"),o.parent().removeClass("active"),n.addClass("open"),s.parent().addClass("active")):n.hasClass("open")&&(n.removeClass("open"),s.parent().removeClass("active"),r.addClass("open"),o.parent().addClass("active"))}),$("#toggleSb").on("click",function(e){e.preventDefault(),$("#sort-wrap").hasClass("open")?($("#barLeft, #sort-wrap").toggleClass("open"),t()):$("#tag-wrap").hasClass("open")?($("#barLeft, #tag-wrap").toggleClass("open"),t()):$("#barLeft").toggleClass("open")}),$("main.content, .style-widget--toggle").click(function(e){e.stopPropagation(),$("#barLeft, #sort-wrap").removeClass("open"),$("#barLeft, #tag-wrap").removeClass("open"),t()}),$(".toggleClosed").on("click",function(){$this.data("target").toggleClass("closed"),$(this).parent($(this)).toggleClass("active")}),$(".hoverToggleHidden").click(function(){target=$($(this).data("target")),target.toggleClass("hidden-div"),$(this).parent($(this)).toggleClass("active")}),$(".bar-left-expander").on("click",function(){$(".bar-left, .container-wrap").toggleClass("closed"),$(".bar-left").hasClass("closed")?$(this).find(".icon").removeClass("icon-angle-left").addClass("icon-angle-right"):$(this).find(".icon").removeClass("icon-angle-right").addClass("icon-angle-left")}),!function(){var e=$("article a").has("img");e&&e.addClass("imgLink")}();var i=$("#custom-page-nav--about"),c=$("#custom-page-nav--contact");a.checkFalseAndRemove(use_nav_link_ABOUT,i),a.checkFalseAndRemove(use_nav_link_CONTACT,c);var l=$(".link-facebook"),p=$(".link-twitter"),d=$(".link-googleplus"),h=$(".link-rss");a.setLink(l,fb_account_link),a.setLink(p,twitter_account_link),a.setLink(d,googleplus_account_link),0===rss_account_link.length?a.setLink(h,"{{@blog.url}}/rss/"):a.setLink(h,rss_account_link),!function(){var e=($("body"),$(".post-wrap")),t=$(".padding-wrap--target"),a=$('img[alt="featured"]'),o=$(".with-Bg-Only");background_image.length>0&&($("body").attr("id",background_image),e.addClass("post-wrap--boxed"),t.addClass("padding-wrap-BGonly"),a.addClass("featured-img-for-global-bg"),o.removeClass("block").addClass("none"))}(),!function(){var e=transparency_sb,t=transparency_slideout,a="rgba(49,51,48, "+e+")",o="rgba(66,69,65, "+t+")",s=$(".bar-left"),r=$(".nav-slideout");s.css({"background-color":a}),r.css({"background-color":o}),slideout_list_simple&&setTimeout(function(){$("ul#filterList li").each(function(){$(this).addClass("simple_slideout_li")}),$("#sort-wrap ul li").each(function(){$(this).addClass("simple_slideout_li")})},25)}(),!function(){var e=Boolean("classic1"===home_page_excerpt_style||"default"===home_page_excerpt_style);if(border_on_excerpt_images===!0&&e===!0){var t=$(".post-excerpt--featured-img");t.addClass("excerptImgBorder--classic1")}}(),useDisqus===!0&&!function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//"+disqus_shortname+".disqus.com/count.js",(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)}(),function(e,t,a,o,s,r){e.GoogleAnalyticsObject=o,e[o]||(e[o]=function(){(e[o].q=e[o].q||[]).push(arguments)}),e[o].s=+new Date,s=t.createElement(a),r=t.getElementsByTagName(a)[0],s.src="//www.google-analytics.com/analytics.js",r.parentNode.insertBefore(s,r)}(window,document,"script","ga"),ga("create",google_analytics_accout),ga("send","pageview")},{"./../helpers.js":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/helpers.js","./ajax_svgIcons":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/ajax_svgIcons.js"}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_home.js":[function(e){function t(){p.addClass("width-height-100 absolute no-pad-top"),d.addClass("width-height-100 absolute no-pad-top")}function a(){$(".post-excerpt--featured-img, .featured").each(function(){var e=$(this);(e.children().length||e.hasClass("featured-with-bg-img"))&&e.parents(".post-excerpt-box--wrap").addClass("excerpt-has-featured")})}function o(){if($(".readMoreLink--btn").text(read_more_btn_text),use_elipse===!0){var e="... "+read_full_post_text;$(".readMoreLink--inline").text(e)}else $(".readMoreLink--inline").text(read_full_post_text)}function s(){var e=$(".excerpt-has-featured .post-excerpt-box--inner .post-excerpt--header");c===!0&&gallery_excerpt_titles===!0&&(e.css("display","block"),$(".post-excerpt--content-wrap").addClass("excerpt-toggled-on"))}{var r=e("./../helpers.js"),n=$(".post-excerpts");$(".post-excerpt-box--wrap"),$(window)}!function(){var e="post-excerpts--"+home_page_excerpt_style,t=$("body");t.addClass(e),n.attr("id",e)}(),e("./home_TagList");var i,c,l;!function(){switch(home_page_excerpt_style){case"galleryi":i=!1,c=!0,l=!1;break;case"classic1":i=!1,c=!1,l=!1;break;case"gallery1":i=!1,c=!0,l=!1;break;case"text":i=!1,c=!1,mediaAasBg=!1;break;case"classic2":i=!0,c=!1,l=!0;break;case"gallery2":i=!0,c=!0,l=!0;break;case"gallery3":i=!0,c=!0,l=!0;break;case"gallery4":i=!0,c=!0,l=!0}}(),i===!1?r.setImagesAsTags():r.setImagesAsBg(),$(".hidden-post-excerpt--featured-img").each(function(){function e(){a.length>0&&(t.parents(".post-excerpt-box--wrap").addClass("excerpt-has-featured"),a.appendTo(t.parents("article.post").find(".post-excerpt--featured-img")))}var t=$(this),a=t.find(".featured");e()});var p=$("iframe"),d=$(".fluid-width-video-wrapper");l===!0?t():(p.removeClass("width-height-100 absolute no-pad-top"),d.removeClass("width-height-100 absolute no-pad-top"),r.fitVidInit()),!function(){var e=$(".hidden-post-excerpt--featured-img"),t=$("#bannerTop"),a=$("#bannerBottom");e.each(function(){var e=$(this),o=e.find(".bannerTop"),s=e.find(".bannerBottom");if(o.length>0){var r=e.contents();o.hasClass("raw")&&t.addClass("raw"),t.append(r),e.parents(".post-excerpt-box--wrap").remove()}if(s.length>0){var n=e.contents();s.hasClass("raw")&&a.addClass("raw"),a.append(n),e.parents(".post-excerpt-box--wrap").remove()}}),t.is(":empty")&&t.remove(),a.is(":empty")&&a.remove()}(),$(".hidden-post-excerpt--featured-img").each(function(){var e=$(this),t=e.find(".excerpt"),a=e.find("excerpt"),o=e.parents("article.post").find(".excerpt-default");if(0!==t.length)o.empty(),o.append(t);else{if(0===a.length)return;o.empty(),o.append(a)}}),a(),o(),s(),!function(){function e(){p.lazyload({effect:"fadeIn",event:"scroll lazy_load_event",appear:function(){setTimeout(function(){n.isotope("layout")},150)},failure_limit:Math.max(p.length-1,0)})}function t(e){setTimeout(function(){$("img.lazy").trigger("lazy_load_event")},e)}function a(e,t){var a;return function(){function o(){e(),a=null}a&&clearTimeout(a),setTimeout(o,t||100)}}function o(e){e.change(function(){var e=$(this);e.parents("li").toggleClass("active")})}function s(e,t){e.change(function(){var e=$(this);e.parents(t).children($("li")).removeClass("active"),e.parents("li").addClass("active")})}function r(e){e.each(function(){var e=$(this);e.trigger("click"),e.parents("li").removeClass("active")})}var c,l="";if(n.isotope({itemSelector:".post-excerpt-box--wrap",animationEngine:"best-available",layoutMode:"masonry",masonry:{columnWidth:".post-excerpt-box--wrap"},filter:function(){var e=$(this),t=c?e.text().match(c):!0,a=l?e.is(l):!0;return t&&a},getSortData:{author:"[data-author]",date:"[data-publisheddate]",title:"[data-title]"},transformsEnabled:!1,sortBy:"date",sortAscending:!1}),n.isotope("on","layoutComplete",function(){t(225)}),"text"===home_page_excerpt_style&&setTimeout(function(){n.isotope("layout")},200),i)var p=$(".post-excerpt--featured-img.lazy");else var p=$("img.lazy");e();var d=$("#quicksearch").keyup(a(function(){c=new RegExp(d.val(),"gi"),n.isotope()})),h=$("#tag-wrap input");h.change(function(){var e=[];h.filter(":checked").each(function(){var t=$(this),a=t.attr("data-filter");e.push(a)}),l=e.join(", "),n.isotope()}),o(h),$("#filterReset").click(function(){var e=$("#filterList :checkbox:checked");r(e),n.isotope("updateSortData").isotope()});var u=$("#current-sort-criteria"),m=$("#current-sort-order");u.append("Date"),m.append("&#x25BC;"),$("#sort-primary input").change(function(){var e=$(this),t=e.attr("data-sort-by");n.isotope({sortBy:t}),u.empty().append(e.attr("data-sort-by"))}),$("#sort-ascDesc input").change(function(){var e=$(this).attr("data-sort-asc");e=Boolean("true"===e),n.isotope({sortAscending:e}),m.empty().append($(this).attr("data-display"))});var g=$("#sort-wrap input"),f=$("#sort-wrap .btn-group");s(g,f),$("#sortReset").click(function(){$("#sort-criteria-default").trigger("click"),$("#sort-order-default").trigger("click")});var v=n.data("isotope"),b=v.filteredItems.length;n.isotope("on","layoutComplete",function(e){$("#filterDisplay").empty().append(e.filteredItems.length+" / "+b)})}(),!function(){function e(e){$("body").addClass(e)}var t="post-excerpts--";"default"===home_page_excerpt_style||"classic1"===home_page_excerpt_style?(t+="classic1",e(t)):"gallery"===home_page_excerpt_style||"gallery1"===home_page_excerpt_style?(t+="gallery1",e(t)):"hybrid"===home_page_excerpt_style?(t+="hybrid",e(t)):"text"===home_page_excerpt_style&&(t+="text",e(t))}(),use_multi_author&&$("#sort-primary").prepend('<li><label><input type="Radio" name="sort-radio" data-sort-by="author">Author</input></label></li>'),useDisqus!==!0&&$(".disqus-comment-wrap").remove()},{"./../helpers.js":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/helpers.js","./home_TagList":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/home_TagList.js"}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/Entry_pages.js":[function(e){function t(){$('[data-toggle="smoothScroll"]').bind("click",function(e){e.preventDefault();var t=$(this).attr("href");return $("html, body").stop().animate({scrollTop:$(t).offset().top},400,function(){location.hash=t}),!1})}var a=e("./../helpers.js");hljs.initHighlightingOnLoad(),setTimeout(a.fitVidInit,500),function(){var e=$("tocTitle"),o=$("toc"),s=($("toc").children(),$(".tocWrap")),r=$("#tocTitle"),n=$("ul#tocList");s.addClass("hidden"),o.length&&(s.addClass("visible"),s.removeClass("hidden")),r.append(e.text());var i=[];o.children().each(function(){var e=$(this);"BR"!==this.nodeName&&i.push(e)}),e.remove(),o.remove(),$.each(i,function(){var e=$(this),t="#"+e.prop("tagName").toLowerCase(),o="#"+e.prop("tagName").toLowerCase(),s=e.html();n.append('<li><a href="'+t+'" data-toggle="smoothScroll" data-id="'+o+'"><svg class="icon"><use xlink:href="#icon-angleR"></use></svg>'+s+"</a></li>"),$(".post-content").find(o).addClass("scrollSpy"),a.removeEmptyTag("p")});var c=$("ul#tocList li a");c.click(function(){var e=$(this);c.removeClass("active"),e.addClass("active")});var l=!1;r.click(function(){l=!l,a.addRemoveClass(n,"closed",l),a.addRemoveClass(r,"closed",l),$("#tocIconOpen").toggle(),$("#tocIconClose").toggle()}),t(),$(".scrollSpy").on("scrollSpy:enter",function(){var e=$(this),t="#"+e.attr("id"),a=$('#tocList [data-id="'+t+'"]'),o=a.attr("data-id");$('#tocList [data-id="'+o+'"').addClass("active")}),$(".scrollSpy").on("scrollSpy:exit",function(){var e=$(this),t="#"+e.attr("id"),a=$('#tocList [data-id="'+t+'"]'),o=a.attr("data-id");$('#tocList [data-id="'+o+'"').removeClass("active")}),$(".scrollSpy").scrollSpy()}(),!function(){if(use_custom_container_width===!0){var e=document.head||document.getElementsByTagName("head")[0],t=".post-wrap { max-width:"+wider_than_breakpoint_1+" !important;}@media screen and (max-width:"+breakpoint_1+") { .post-wrap { max-width:"+breakpoint_1_width+" !important; width:"+breakpoint_1_width+" !important;  }}@media screen and (max-width:"+breakpoint_2+") { .post-wrap { max-width:"+breakpoint_2_width+" !important; width:"+breakpoint_2_width+" !important;  }}@media screen and (max-width:"+breakpoint_3+") { .post-wrap { max-width:"+breakpoint_3_width+" !important; width:"+breakpoint_3_width+" !important;  }}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="custom-container-breakpoints">'+t+"</style>",e.appendChild(a.childNodes[1])}}(),!function(){var e=$(".post-content"),t=$(".post-title");e.hasClass("noPreFormat")&&(t.remove(),$("h1:first").addClass("post-title"))}(),t(),!function(){$('[data-toggle="smoothScroll"]').bind("click",function(e){e.preventDefault();var t=$(this).attr("href");return $("html, body").stop().animate({scrollTop:$(t).offset().top},400,function(){location.hash=t}),!1})}(),!function(){var e=$('.post-wrap img[alt="featured"]:not(".leave-here")'),t=$('.post-wrap .featured:not(".leave-here")'),a=$('.post-wrap img[alt="top"]:not(".leave-here")'),o=document.querySelector("body.tag-no-cover");o?$("#page-post-cover").remove():(e.prependTo(".post-content"),t.prependTo(".post-content"),a.prependTo(".post-content"))}(),!function(){$("body").find(".home-only").remove()}(),$(".post-content img").each(function(){var e=$(this),t=$(this).attr("title");t&&e.wrap('<figure class="image"></figure>').after("<figcaption>"+t+"</figcaption>")}),!function(){var e=$("#disqus-wrap"),t=$(".disqus-comment-wrap");useDisqus!==!0&&(e.remove(),t.remove())}(),!function(){var e=document.querySelector("body").classList;if(e.contains("page-contact")){var t=$("phone"),o=$("skype"),s=$("email"),r=$("fax"),n=$("website"),i=$("address"),c=$("#contact-list--phone"),l=$("#contact-list--skype"),p=$("#contact-list--fax"),d=$("#contact-list--email"),h=$("#contact-list--website"),u=$("#contact-list--address");a.input_checkAndSet(t,c,"phone"),a.input_checkAndSet(o,l,"skype"),a.input_checkAndSet(r,p,"fax"),a.input_checkAndSet(s,d,"email"),a.input_checkAndSet(n,h,"website"),a.input_checkAndSet(i,u,"address");var m=$("#contactBlurb"),g=$("blurb");m.append(g),a.removeTag("blurb");var f=$("#map"),v=$(".map");f.append(v),a.removeTag("map")}}()},{"./../helpers.js":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/helpers.js"}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/ajax_svgIcons.js":[function(e,t){t.exports=!function(){var e=document.getElementById("iconPath").textContent,t=new XMLHttpRequest;t.open("GET",e,!0),t.send(),t.onload=function(){var e=document.createElement("div");e.innerHTML=t.responseText,document.body.insertBefore(e,document.body.childNodes[0])}}()},{}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/home_TagList.js":[function(e){var t=e("./../helpers"),a=e("slugger");!function(){var e=document.getElementById("raw-tag-list").textContent.split(",");if(show_filter_tag_count)for(var o={},s=0;s<e.length;s++){var r=e[s];o[r]=o[r]?o[r]+1:1}var n=["width2x","height2x","square2x","sticky-post","no-cover"," "],i=e.filter(function(e,t,a){return t===a.indexOf(e)&&-1===n.indexOf(e)}),c=i.filter(Boolean).sort(t.sortAlpha),l=document.getElementById("filterList");if(show_filter_tag_count)for(var s=0;s<c.length;s++){var r=c[s],p=r.replace(/[-_]/g," "),d=a(r),h=o[r],u="<li><label><input type='checkbox' class='tag-filter-checkbox' data-filter='.tag-"+d+"'>"+p+"<span class='tag-li-count'>"+h+"</span></label></li>";l.innerHTML+=u}else for(var s=0;s<c.length;s++){var r=c[s],p=r.replace(/[-_]/g," "),d=a(r),u="<li><label><input type='checkbox' class='tag-filter-checkbox' data-filter='.tag-"+d+"'>"+p+"</label></li>";l.innerHTML+=u}}()},{"./../helpers":"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/helpers.js",slugger:"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/node_modules/slugger/slugger.js"}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/assets-src/scripts/main/smooth_wheel.js":[function(){!function(){function e(){var e=!1;e&&l("keydown",s),b.keyboardSupport&&!e&&c("keydown",s)}function t(){if(document.body){var t=document.body,a=document.documentElement,o=window.innerHeight,s=t.scrollHeight;if(y=document.compatMode.indexOf("CSS")>=0?a:t,f=t,e(),w=!0,top!=self)k=!0;else if(s>o&&(t.offsetHeight<=o||a.offsetHeight<=o)){var r=!1,n=function(){r||a.scrollHeight==document.height||(r=!0,setTimeout(function(){a.style.height=document.height+"px",r=!1},500))};if(a.style.height="auto",setTimeout(n,10),y.offsetHeight<=o){var i=document.createElement("div");i.style.clear="both",t.appendChild(i)}}b.fixedBackground||_||(t.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function a(e,t,a,o){if(o||(o=1e3),d(t,a),1!=b.accelerationMax){var s=+new Date,r=s-D;if(r<b.accelerationDelta){var n=(1+30/r)/2;n>1&&(n=Math.min(n,b.accelerationMax),t*=n,a*=n)}D=+new Date}if(B.push({x:t,y:a,lastX:0>t?.99:-.99,lastY:0>a?.99:-.99,start:+new Date}),!T){var i=e===document.body,c=function(){for(var s=+new Date,r=0,n=0,l=0;l<B.length;l++){var p=B[l],d=s-p.start,h=d>=b.animationTime,u=h?1:d/b.animationTime;b.pulseAlgorithm&&(u=g(u));var m=p.x*u-p.lastX>>0,f=p.y*u-p.lastY>>0;r+=m,n+=f,p.lastX+=m,p.lastY+=f,h&&(B.splice(l,1),l--)}i?window.scrollBy(r,n):(r&&(e.scrollLeft+=r),n&&(e.scrollTop+=n)),t||a||(B=[]),B.length?j(c,e,o/b.frameRate+1):T=!1};j(c,e,0),T=!0}}function o(e){w||t();var o=e.target,s=i(o);if(!s||e.defaultPrevented||p(f,"embed")||p(o,"embed")&&/\.pdf/i.test(o.src))return!0;var r=e.wheelDeltaX||0,n=e.wheelDeltaY||0;return r||n||(n=e.wheelDelta||0),!b.touchpadSupport&&h(n)?!0:(Math.abs(r)>1.2&&(r*=b.stepSize/120),Math.abs(n)>1.2&&(n*=b.stepSize/120),a(s,-r,-n),void e.preventDefault())}function s(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==C.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(p(t,"button")&&e.keyCode===C.spacebar)return!0;var s,r=0,n=0,c=i(f),l=c.clientHeight;switch(c==document.body&&(l=window.innerHeight),e.keyCode){case C.up:n=-b.arrowScroll;break;case C.down:n=b.arrowScroll;break;case C.spacebar:s=e.shiftKey?1:-1,n=-s*l*.9;break;case C.pageup:n=.9*-l;break;case C.pagedown:n=.9*l;break;case C.home:n=-c.scrollTop;break;case C.end:var d=c.scrollHeight-c.scrollTop-l;n=d>0?d+10:0;break;case C.left:r=-b.arrowScroll;break;case C.right:r=b.arrowScroll;break;default:return!0}a(c,r,n),e.preventDefault()}function r(e){f=e.target}function n(e,t){for(var a=e.length;a--;)L[S(e[a])]=t;return t}function i(e){var t=[],a=y.scrollHeight;do{var o=L[S(e)];if(o)return n(t,o);if(t.push(e),a===e.scrollHeight){if(!k||y.clientHeight+10<a)return n(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return n(t,e)}while(e=e.parentNode)}function c(e,t,a){window.addEventListener(e,t,a||!1)}function l(e,t,a){window.removeEventListener(e,t,a||!1)}function p(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,($.x!==e||$.y!==t)&&($.x=e,$.y=t,B=[],D=0)}function h(e){if(e){e=Math.abs(e),x.push(e),x.shift(),clearTimeout(E);var t=u(x[0],120)&&u(x[1],120)&&u(x[2],120);return!t}}function u(e,t){return Math.floor(e/t)==e/t}function m(e){var t,a,o;return e*=b.pulseScale,1>e?t=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=a+o*(1-a)),t*b.pulseNormalize}function g(e){return e>=1?1:0>=e?0:(1==b.pulseNormalize&&(b.pulseNormalize/=m(1)),m(e))}var f,v={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},b=v,_=!1,k=!1,$={x:0,y:0},w=!1,y=document.documentElement,x=[120,120,120],C={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},b=v,B=[],T=!1,D=+new Date,L={};setInterval(function(){L={}},1e4);var E,S=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)}}(),A=/chrome/i.test(window.navigator.userAgent),q=null;"onwheel"in document.createElement("div")?q="wheel":"onmousewheel"in document.createElement("div")&&(q="mousewheel"),q&&A&&(c(q,o),c("mousedown",r),c("load",t))}()},{}],"/home/isaac/Web/Theme-Development/t-Blockster/Blockster-Ghost/Blockster/ghost-root/content/themes/_blockster_source/node_modules/slugger/slugger.js":[function(e,t){!function(){function e(e,t){t||(t={});var o="A-Za-z0-9_ -";t.alsoAllow&&(o=t.alsoAllow+o);var s,r,n=new RegExp("[^"+o+"]","g"),i=t.maintainCase||!1,c=t.replacement||"-",l=t.smartTrim,p=t.decode!==!1;return"string"!=typeof e?"":(i||(e=e.toLowerCase()),p&&(e=decodeURIComponent(e)),s=e.trim().replace(n,"").replace(a,c),l&&s.length>l&&(r=s.charAt(l)===c,s=s.slice(0,l),r||(s=s.slice(0,s.lastIndexOf(c)))),s)}var a=/\s+/g;"undefined"!=typeof t?t.exports=e:window.slugger=e}()},{}]},{},["./assets-src/scripts/main/index.js"]);