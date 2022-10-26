const w = document.querySelector('#width-div'),
      h = document.querySelector('#height-div'),
      box = document.querySelector('#box');

w.addEventListener('input', function () {
    box.style.width = w.value+"px";
}, false);

h.addEventListener('input', function () {
    box.style.height = h.value+"px";
}, false);