
import  $ from "jquery"

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

  var gallery
  document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
      link = target.src ? target.parentNode : target,
      options = { index: link, event: event, stretchImages: true, carousel: true, slideshowInterval: 4000, onopen: GalOpen, onclose: GalClose, closeOnEscape: true },
      links = this.getElementsByTagName('a');
    gallery = blueimp.Gallery(links, options);
  };
  // Elia added
  function GalOpen() {
    // Gallery open event handler
    var v_galery = 'running';
    location.hash = v_galery;
    //window.alert('location.hash = galery');
    console.log('location.hash changed on open to: ' + location.hash);
  };
  function GalClose() {
    // Gallery open event handler
    var v_galery = '';
    location.hash = v_galery;
    //window.alert('location.hash = galery');
    console.log('location.hash changed on close to: ' + location.hash);
  };
  window.onhashchange = function () {
    console.log('location.hash onhashchange ' + location.hash);
    if (location.hash !== '#running') {
      gallery.close();
      console.log('gallery.close();');
    }
  }

  $(document).ready(function () {
    $(window).on("navigate", function (event, data) {
      var direction = data.state.direction;
      if (direction == 'back') {
        // do something
        gallery.close();
        window.alert('gallery.close();');
      }
      if (direction == 'forward') {
        // do something else
        gallery.close();
      }
    });
  });

  console.log('Initialized app');
});
