function scrollToTop(){let o=-window.scrollY/(500/15);const l=setInterval(function(){0!=window.scrollY?window.scrollBy(0,o):clearInterval(l)},15)}console.log("??"),window.onscroll=()=>{const o=document.getElementById("btnScrollTop");o&&(1e3<document.body.scrollTop||1e3<document.documentElement.scrollTop?o.style.display="block":o.style.display="none")};