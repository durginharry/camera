var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {},
  receivedEvent: function(id) {}
};

var photograph=function() {
  let url='http://harrysserver.com/camera/upload.php';
      CameraPreview.takePicture({height:1280, width:720, quality:50}, function(base64PictureData) {
        var pic='data:image/jpeg;base64,'+base64PictureData;
        $.post(url, {image: pic});
      });
}

function delay() {
  return new Promise(resolve =>  setTimeout(resolve, 15000));
}

async function delayedLog(item) {
  await delay();  
  photograph();
}

async function runMode() { 
   for (var 1=0; i<Intinity; i++;) {
     await delayedLog(item);
  };
  console.log('Done!');
}

app.initialize();
CameraPreview.startCamera({camera: CameraPreview.CAMERA_DIRECTION.BACK});
CameraPreview.setFlashMode(CameraPreview.FLASH_MODE.OFF);
runMode();
