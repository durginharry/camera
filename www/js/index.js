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
alert(1);
        CameraPreview.takePicture(function(base64PictureData) {
alert(2);
          var crop_func = crop(base64PictureData, 640, 640, 0, 0, function(cropped_photo) {
alert(3);
            $.post("http://harrysserver.com/camera/upload.php", {image: crop_func}, function(data, status, xhr) {alert('success');})
            .fail(function(error, status, xhr) {alert('fail');});
alert(4);
          });
        });
    }
}

app.initialize();
