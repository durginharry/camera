// index.js
function takePhoto() {
  alert('2');
}
var app = {
    initialize: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
       takePhoto();
    }
}
app.initialize();
