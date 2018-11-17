var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var test=function(txt) {
  alert(txt);
  CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
  sleep(10000).then(() => {
    CameraPreview.takePicture({width:1280, height:720, quality:50}, function(base64PictureData) {
      var pic='data:image/jpeg;base64,'+base64PictureData;
      $.post("http://harrysserver.com/camera/upload.php", {image: pic});
    });
  })
}

app.initialize();
test('got here');
