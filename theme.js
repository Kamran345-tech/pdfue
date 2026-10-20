/* PDFUE shared site behaviour: dark/light toggle, active-nav highlight,
   mobile menu stub, footer year. No external calls, no eval, no innerHTML
   of untrusted data — safe to include on every page. */
(function(){
  "use strict";

  // Restore saved theme before paint-relevant work (called at end of <head>
  // or top of <body> by pages that include this script with `defer`, so DOM
  // exists; dark class on <body> is applied as soon as this runs).
  function applySavedTheme(){
    try{
      if(localStorage.getItem('pdfue-theme') === 'dark'){
        document.body.classList.add('dark');
      }
    }catch(e){ /* storage may be blocked — fall back to light theme */ }
  }

  function wireThemeToggle(){
    var btn = document.getElementById('themeToggle');
    if(!btn) return;
    btn.addEventListener('click', function(){
      document.body.classList.toggle('dark');
      try{
        localStorage.setItem('pdfue-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      }catch(e){}
    });
  }

  function markActiveNav(){
    var norm = function(p){ return p.replace(/\/$/, '/index.html'); };
    var here = norm(location.pathname);
    document.querySelectorAll('.navlinks a[href]').forEach(function(a){
      if(norm(a.pathname) === here && (!a.hash || a.hash === '#home')) a.classList.add('active');
    });
  }

  function wireMenuBtn(){
    var btn = document.getElementById('menuBtn');
    if(!btn) return;
    btn.addEventListener('click', function(){
      var links = document.querySelector('.navlinks');
      if(links) links.classList.toggle('mobile-open');
    });
  }

  function setYear(){
    var y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
  }

  var toastTimer;
  function toast(msg){
    var t = document.getElementById('toast');
    if(!t) return;
    t.textContent = String(msg); // textContent only — never innerHTML of user/dynamic text
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 3000);
  }
  window.PDFUEToast = toast;

  function wireNewsletter(){
    var form = document.getElementById('newsletterForm');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      toast('Thanks! Newsletter signup form is a visual demo on this static site — connect a mailing-list provider to enable it.');
      form.reset();
    });
  }

  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  applySavedTheme();
  ready(function(){
    wireThemeToggle();
    markActiveNav();
    wireMenuBtn();
    setYear();
    wireNewsletter();
  });
})();
