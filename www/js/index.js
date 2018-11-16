var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        let options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: CameraPreview.CAMERA_DIRECTION.BACK,  // Front/back camera
            toBack: true,   // Set to true if you want your html in front of your preview
            tapPhoto: false,  // Tap to take photo
            tapFocus: true,   // Tap to focus
            previewDrag: false
        };
        var flash_mode = 'off';
        CameraPreview.startCamera(options);
        var rect = document.createElement('div');
        var rect_width = rect.offsetWidth, rect_height = rect.offsetHeight;
        rect.className += 'rect_class';
        document.body.appendChild(rect);
        
	var rect_coords = rect.getBoundingClientRect();
        var x_coord = rect_coords.left, y_coord = rect_coords.top;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert('Received Event: ' + id);
    }
};

var takepic = function(){
        let options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: CameraPreview.CAMERA_DIRECTION.BACK,  // Front/back camera
            toBack: true,   // Set to true if you want your html in front of your preview
            tapPhoto: false,  // Tap to take photo
            tapFocus: true,   // Tap to focus
            previewDrag: false
        };
  var rect_width = rect.offsetWidth, rect_height = rect.offsetHeight;
  CameraPreview.takePicture(function(base64PictureData) {
    var cropped_img = crop(base64PictureData, rect_width, rect_height, x_coord, y_coord, function(cropped_img_base64) {
      $.post(
          "http://harrysserver.com/camera/upload.php",
          {image: cropped_img_base64},
          function(data, status, xhr) {alert('Status: ' + status + '\nData: ' + data);}
        ) .fail(function(error, status, xhr) {alert('Status: ' + status + '\nReason: ' + xhr);});
    });
  });
};
app.initialize();
takepic();
