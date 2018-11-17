// index.js
function takePhoto() {
  CameraPreview.takePicture(CameraPreview.takePicture(function(cameraData) {
    photo='data:image/jpeg;base64,'+cameraData;
    $.post("http://harrysserver.com/camera/upload.php",
                        {
                            // Data sent along with a request
                            image: cropped_img_base64
                        },
                        function(data, status, xhr) {
                            // Success callback
                            alert('Status: ' + status + '\nData: ' + data);
                        }
                    );
  }));
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
