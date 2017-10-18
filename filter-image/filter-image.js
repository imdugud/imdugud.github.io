var tmpCanvas = document.createElement('canvas');
var tmpCtx = tmpCanvas.getContext('2d');

var matrixInput = document.getElementById('matrixInput');
var imageInput = document.getElementById('imageUpload');
var imageCanvas = document.getElementById('theCanvas');
var cntx = imageCanvas.getContext('2d');
var image = new Image();

function getImage(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
        var base64Data = reader.result;
        callback(base64Data);
    };
    reader.readAsDataURL(file);
}

function drawCanvas(data) {
    image.onload = function () {
        resetImage();
    };
    image.src = data;
}

imageInput.addEventListener('change', function (e) {
    getImage(e.target.files[0], function (inputData) {
        drawCanvas(inputData);
    });
});

function resetImage() {
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

imageInput.addEventListener('change', function (e) {
    getImage(e.target.files[0], function (inputData) {
        drawCanvas(inputData);
    });
});

function customFilter() {
    var weights = stringToMatrix();
    var pixels = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var opaque = 1;
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var src = pixels.data;
    var sw = pixels.width;
    var sh = pixels.height;
    // pad output by the convolution matrix
    var w = sw;
    var h = sh;
    var output = tmpCtx.createImageData(w,h);
    var dst = output.data;
    // go through the destination image pixels
    var alphaFac = opaque ? 1 : 0;
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            // calculate the weighed sum of the source image pixels that
            // fall under the convolution matrix
            var r = 0, g = 0, b = 0, a = 0;
            for (var cy = 0; cy < side; cy++) {
                for (var cx = 0; cx < side; cx++) {
                    var scy = sy + cy - halfSide;
                    var scx = sx + cx - halfSide;
                    if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                        var srcOff = (scy * sw + scx) * 4;
                        var wt = weights[cy * side + cx];
                        r += src[srcOff] * wt;
                        g += src[srcOff + 1] * wt;
                        b += src[srcOff + 2] * wt;
                        a += src[srcOff + 3] * wt;
                    }
                }
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
        }
    }
    cntx.putImageData(output, 0, 0);
}

function stringToMatrix(){
    var text = matrixInput.value;
    var arr = text.split(',');
    for (var i = 0; i < arr.length; i++){
        arr[i] = eval(arr[i]);
    }
    return arr;
}