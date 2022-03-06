status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(400, 260);
    cam = createCapture(VIDEO);
    cam.hide();
    coco = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() {
    console.log("Guess what... Model is Loaded!!!!!!!!!!!!!!!!!!!");
    status = true;
}

function draw() {
    image(cam, 0, 0, 600, 400)
}

function start() {
    document.getElementById("stats").innerHTML = "Status: Detecting Objects";
    objectName = document.getElementById("object_inp").value;
}