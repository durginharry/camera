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
alert(1);
        CameraPreview.startCamera(options);
alert(2);
        CameraPreview.takePicture(function(base64PictureData) {
          var photo = 'data:image/jpeg;base64,'+base64PictureData;
          $.post("http://192.168.0.14:8000/api/images/create/", {image: photo}, alert('success'), alert('fail'))
        });
    }
}

app.initialize();
