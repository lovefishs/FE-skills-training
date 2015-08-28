document.addEventListener('DOMContentLoaded', function() {
  // var tabs = document.querySelectorAll('.tabs');
  // var tab = document.querySelector('.tabs');
  Gator(document).on('click', '.tabs > .tabs-list > .tabs-item > a[href^="#"]', function(e) {
    // return false;
    e.preventDefault(); // 通知浏览器不要执行与事件关联的默认动作
    e.stopPropagation(); // 不再派发事件

    // console.log(e.srcElement); // 对于生成事件的 Window 对象、Document 对象或 Element 对象的引用
    // console.log(e.target); // 返回触发此事件的元素(事件的目标节点)
    // console.log(e.currentTarget); // 返回其事件监听器触发该事件的元素(这里是 document)
    // console.log(e);
    var target = e.srcElement;
    while(true) {
      if(target.tagName.toLocaleLowerCase() === 'a' || target.tagName.toLocaleLowerCase() === 'body') {
        break;
      }
      target = target.parentNode;
    }
    if(target.tagName.toLocaleLowerCase() === 'body') return;
    var pane = target.getAttribute('href') === null ? null : document.getElementById(target.getAttribute('href').replace('#', ''));
    if(pane !== null) {
      var currentActivePanes = pane.parentNode.querySelectorAll('.tabs-pane.active');
      for(var i=currentActivePanes.length-1; i>=0; i--) {
        var activePane = currentActivePanes[i];
        if ('classList' in document.documentElement) {
          activePane.classList.remove('active');
        } else {
          activePane.className = activePane.className.replace('active', '');
        }
      }
      pane.className += ' active ';

      var item = target.parentNode;
      var activeItems = item.parentNode.querySelectorAll('.tabs-item.active');
      for(var i=activeItems.length-1; i>=0; i--) {
        var activeItem = activeItems[i];
        if ('classList' in document.documentElement) {
          activeItem.classList.remove('active');
        } else {
          activeItem.className = activeItem.className.replace('active', '');
        }
      }
      item.className += ' active ';
    }
  });
});
