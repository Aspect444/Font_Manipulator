difference = 0;
rightx = 0;
leftx = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600, 400);
    video.position(95, 225);

   canvas =  createCanvas(600, 400);
   canvas.position(815, 225);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("you did it yay!!!!!!!!!!!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftx = results[0].pose.leftWrist.x;
        rightx = results[0].pose.rightWrist.x;
        difference = floor(leftx - rightx);
    }
}
function draw(){
    background('#FFE787');
    document.getElementById("size").innerHTML = "The size of the text = " + difference;
    textSize(difference)
    fill("brown");
    text("HI", 50, 300,);
}