var imageInput = document.getElementById('imageUpload');
var imageCanvas = document.getElementById('theCanvas');
var cntx = imageCanvas.getContext('2d');
var image = new Image();

function getImage(file, callback){
    var reader = new FileReader();
    reader.onload = function() {
        var base64Data = reader.result;
        callback(base64Data);
    };
    reader.readAsDataURL(file);
}

function drawCanvas(cntx, data){
    image.onload = function() {
        resetImage();
    };
    image.src = data;
}

imageInput.addEventListener('change', function (e) {
    getImage(e.target.files[0], function (inputData) {
        drawCanvas(cntx, inputData);
    });
});

function resetImage(){
    clearCanvas(cntx);
    scaleToImageHeight(image, cntx.canvas, cntx.canvas.width);
    cntx.drawImage(image, 0, 0, image.width, image.height,     // source rectangle
        0, 0, cntx.canvas.width, cntx.canvas.height);
}

//clear canvas
function clearCanvas(context) {
    context.clearRect(0, 0, cntx.canvas.width, cntx.canvas.height);
}

//set width according to
function scaleToImageHeight(image, canvas, width) {
    var w = image.width;
    var k = width / w;
    var h = image.height * k;
    canvas.height = h;
    canvas.width = width;
}

//setGrayscale
function setGrayscale(){
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for(var i = 0; i < data.length; i += 4){
        var brightness = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
        // red
        data[i] = brightness;
        // green
        data[i + 1] = brightness;
        // blue
        data[i + 2] = brightness;

    }
    cntx.putImageData(img, 0, 0);
}

//threshold
function setThreshold(limit){
    setGrayscale();
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for(var i = 0; i < data.length; i += 4){
        var val = 0;
        if(data[i] < limit){
            val = 255;
        }
        // red
        data[i] = val;
        // green
        data[i + 1] = val;
        // blue
        data[i + 2] = val;

    }
    cntx.putImageData(img, 0, 0);
}

//brightness
function setBrightness(brightness){
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for(var i = 0; i < data.length; i += 4){
        // red
        data[i] += brightness;
        // green
        data[i + 1] += brightness;
        // blue
        data[i + 2] += brightness;

    }
    cntx.putImageData(img, 0, 0);
}