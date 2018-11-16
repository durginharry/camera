// index.js

var app = {
    // Application Constructor
    initialize: function() {document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);},
    onDeviceReady: function() {
        let options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: CameraPreview.CAMERA_DIRECTION.BACK,  // Front/back camera
            toBack: true,   // Set to true if you want your html in front of your preview
            tapPhoto: false,  // Tap to take photo
            tapFocus: false,   // Tap to focus
            previewDrag: false
        };
        CameraPreview.startCamera(options);
        CameraPreview.takePicture(function(base64PictureData) {
          var cropped_photo = crop(base64PictureData, 640, 640, 0, 0, function(photo) {
            $.post("http://harrysserver.com/camera/upload.php", {image: photo}, function(data, status, xhr) {alert('success');})
            .fail(function(error, status, xhr) {alert('fail');});
          });
        });
    }
}

app.initialize();
