noseX = 0;
noseY = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    var posenet = ml5.poseNet(video, modelLoaded)
     posenet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,300,300)
}

function save(){
    console.log("save")
}

function modelLoaded(){
console.log("PoseNet model has been loaded")
}

function gotPoses(results){
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX", noseX)
    console.log("noseY", noseY)
} 