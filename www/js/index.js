var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {},
  receivedEvent: function(id) {}
};

var photograph=function() {
  let url='http://harrysserver.com/camera/upload.php';
      CameraPreview.takePicture({height:1280, width:720, quality:70}, function(base64PictureData) {
        var pic='data:image/jpeg;base64,'+base64PictureData;
        $.post(url, {image: pic, timeout: 50000});
      });
}

function photoDelay() {
  return new Promise(resolve =>  setTimeout(resolve, 15000));
}

async function photos() {
  await photoDelay();  
  photograph();
}

async function processArray() { 
 for (var i=0; i<Infinity; i++) { 
     await photos();
  };
}

app.initialize();
CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
CameraPreview.getFocusMode(function(f){ alert(f);});
CameraPreview.getFlashMode(function(f){ alert('2');});
//CameraPreview.getFocusMode(function(currentFocusMode){ alert(currentFocusMode); });
//CameraPreview.setFocusMode('fixed');
//CameraPreview.setFlashMode('off');
alert('3');
//CameraPreview.hide();
//processArray();

