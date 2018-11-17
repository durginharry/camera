var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
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
function capture() {
//  CameraPreview.startCamera( {tapPhoto: false} );

  CameraPreview.takePicture(function(cameraData) {
    alert(1);
  });
//    photo='data:image/jpeg;base64,'+cameraData;
//    $.post("http://harrysserver.com/camera/upload.php",
//                        {
//                            // Data sent along with a request
//                            image: cropped_img_base64
//                        },
//                        function(data, status, xhr) {
//                            // Success callback
//                            alert('Status: ' + status + '\nData: ' + data);
//                        }
//                    );
}
app.initialize();
capture();




