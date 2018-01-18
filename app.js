var notes = document.querySelector('.notes');
var copy = document.querySelector('.copy-link');

notes.innerHTML = window.location.hash.length === 0
  ? 'This is a simple note taking app. Click here, start typing and copy the url...'
  : decodeURI(atob(window.location.hash.substr(1)));

window.location.hash = encodeURI(btoa(notes.innerHTML));

notes.addEventListener('keyup', function () {
  window.location.hash = encodeURI(btoa(notes.innerHTML));
});

new Clipboard('.copy-link', {
  text: function() {
    return window.location.href;
  }
});
copy.addEventListener('click', function (e) {
  e.preventDefault();
});