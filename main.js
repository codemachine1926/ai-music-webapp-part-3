x_wrist_l = 0;
y_wrist_l = 0;

x_wrist_r = 0;
y_wrist_r = 0;

function setup() {
    canvas = createCanvas(450, 350);
    canvas.position(400, 190);

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 450, 350);
}

function modelloaded() {
    console.log("model is loaded");
}

function gotresult(results) {
    if (results.length > 0) {
        console.log(results);

        x_wrist_l = results[0].pose.leftWrist.x;
        y_wrist_l = results[0].pose.leftWrist.y;

        x_wrist_r = results[0].pose.rightWrist.x;
        y_wrist_r = results[0].pose.rightWrist.x;

        console.log("x of left wrist is = " + x_wrist_l + "   y of left wrist is = " + y_wrist_l + ",   x of right wrist is = " + x_wrist_r + "   y of right wrist is = " + y_wrist_r);
    }
}