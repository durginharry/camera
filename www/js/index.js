// index.js
function takePhoto() {

alert(1);
  CameraPreview.takePicture(function(cameraData) {
alert(2);
    photo='data:image/jpeg;base64,'+cameraData;
alert(3);
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
