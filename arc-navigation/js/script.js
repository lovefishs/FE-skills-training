// 类似 jQuery 的 ready
document.addEventListener('DOMContentLoaded', function() {
  // console.log('DOMContentLoaded');

  // removeClass, takes two params: element and classname
  function removeClass(el, cls) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
  }
  // removeClass(element, "foo");

  // hasClass, takes two params: element and classname
  function hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }
  // if (hasClass(element, "foo")) {}

  var mainNav = document.getElementById('mainNav');
  Gator(mainNav).on('click', '.sub-nav-type', function(e) {
    // console.log(e);
    var target = e.srcElement;
    var item = target.parentNode;
    var nav = item.parentNode;
    var subNav = item.querySelector('.sub-nav');
    // var subNav = target.nextSibling; // previousSibling
    // console.log(subNav);
    // HTML5 的  classList API
    if ('classList' in document.documentElement) {
      // classList is supported, now do something with it
      // item.classList.add('active');
      // item.classList.remove('active');
      // item.classList.contains('active');
      // item.classList.toggle('active');
      if(item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        var itemActive = nav.querySelector('.nav-item.active');
        if(itemActive !== null) {
          itemActive.classList.remove('active');
        }
        item.classList.add('active');
      }
    } else {
      if(hasClass(item, 'active')) {
        removeClass(item, 'active');
      } else {
        var itemActive = nav.querySelector('.nav-item.active');
        if(itemActive !== null) {
          removeClass(itemActive, 'active');
        }
        item.className += ' active';
      }
    }
    return (subNav === null) ? true : false;
  });
}, false);
