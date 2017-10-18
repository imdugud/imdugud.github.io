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

function drawCanvas(cntx, data) {
    image.onload = function () {
        resetImage();
    };
    image.src = data;
}

imageInput.addEventListener('change', function (e) {
    getImage(e.target.files[0], function (inputData) {
        drawCanvas(cntx, inputData);
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

function setPixel(data, i, val) {
    data[i] = data[i + 1] = data[i + 2] = val;
}

//setGrayscale
function setGrayscale() {
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        var brightness = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
        setPixel(data, i, brightness);
    }
    cntx.putImageData(img, 0, 0);
}

//threshold
function setThreshold(limit) {
    setGrayscale();
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        var val = 0;
        if (data[i] < limit) {
            val = 255;
        }
        setPixel(data, i, val);

    }
    cntx.putImageData(img, 0, 0);
}

//brightness
function setBrightness(brightness) {
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        // red
        data[i] += brightness;
        // green
        data[i + 1] += brightness;
        // blue
        data[i + 2] += brightness;

    }
    cntx.putImageData(img, 0, 0);
}

//black and white horizontal line effect
function setImageLineEffect(limit) {
    setThreshold(limit);
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    var val = 255;
    for (var i = 0; i < data.length; i += 4) {
        if (i < 4) {
            continue;
        }
        if (data[i] == data[i - 4] && data[i] != data[i + 4]) {
            setPixel(data, i, val);
        }
        if (data[i] != data[i - 4] && data[i] == data[i + 4]) {
            setPixel(data, i, val);
        } else {
            setPixel(data, i, 0);
        }
    }
    cntx.putImageData(img, 0, 0);
}

//dot distortion
function setDotDistortion(limit) {
    for (var i = 0; i < cntx.canvas.height; i += 2) {
        var img = cntx.getImageData(0, i, cntx.canvas.width, 1);
        var data = img.data;

        for (var j = 0; j < data.length; j += 4) {
            var val = Math.floor(Math.random() * (limit - (-limit) + 1)) + (-limit);
            data[j] += val;
            data[j + 1] += val;
            data[j + 2] += val;
        }
        cntx.putImageData(img, 0, i);
    }
}


//dot distortion
function setColorShifting(percent) {
    var amount = (percent*(cntx.canvas.width))/100;
    var tempImg = cntx.createImageData(cntx.canvas.width, cntx.canvas.height);
    var tempData = tempImg.data;
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        var val = amount * 4;
        tempData[i]     = data[i];     /// copy RGB data to canvas from custom array
        tempData[i + 1] = data[i+1 + val];
        tempData[i + 2] = data[i+2 - val];
        tempData[i + 3] = data[i+3];
    }
    img = tempImg;
    cntx.putImageData(img, 0, 0);
}

//rgb average
function setAverage() {
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        var val = (data[i] + data[i + 1] + data[i + 2])/3;
        setPixel(data, i, val);
    }
    cntx.putImageData(img, 0, 0);
}

//rgb average
function reduceColor() {
    var img = cntx.getImageData(0, 0, cntx.canvas.width, cntx.canvas.height);
    var data = img.data;
    var reducedAmount =  64;
    for (var i = 0; i < data.length; i += 4) {
        var r = Math.round(data[i]/reducedAmount);
        var g = Math.round(data[i+1]/reducedAmount);
        var b = Math.round(data[i+2]/reducedAmount);
        data[i] = reducedAmount * r;
        data[i+1] = reducedAmount * g;
        data[i+2] = reducedAmount * b;
    }
    cntx.putImageData(img, 0, 0);
}

