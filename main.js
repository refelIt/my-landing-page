

var menuBtn = document.getElementById('menu-btn');
      menuBtn.addEventListener('click', menuActive);
      var navHeader = document.getElementsByClassName('nav-header')[0];

      function menuActive(){
          menuBtn.id = "menu-btnActive";
          navHeader.className = 'nav-header-active animate__animated animate__fadeInRight';
          menuBtn.removeEventListener('click', menuActive);
          menuBtn.addEventListener('click', menuNotActive);
      }

      function menuNotActive(){
          menuBtn.id = "menu-btn";
          navHeader.className = 'nav-header';
          menuBtn.removeEventListener('click', menuNotActive);
          menuBtn.addEventListener('click', menuActive);
      }