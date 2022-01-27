noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
 function modelLoaded() {
     console.log('PoseNet Is Initialzed!');
 }

 function draw() {
    background('#969a97');
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y; 
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - RightWristX);

        console.log("LeftWristX =" + leftWristX + "righWristX =" + rightWristX + "difference =" + difference );
 }
}

function draw() {
    background('#32a4a8');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be =" + difference +"px";
    fill('#2fff00') ;
    stroke('#2e0826');
    square(noseX, noseY, difference);

}
