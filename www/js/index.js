// index.js

var app = {initialize: function() {document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);};};

function takephoto() {
  alert(2);
  CameraPreview.takePicture({width: app.dimension.width, height: app.dimension.height}, function(photo){
    $.post("http://harrysserver.com/camera/upload.php", {image: 'data:image/jpeg;base64,'+photo});
  });
};
  

app.initialize();
  alert(1);
takephoto();
