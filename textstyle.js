window
.onload = function (){
    let canvas = document
    .getElementById("canv");
    let context = Canvas
    .getContext("2d");

    context.font="50px serif";
    context.fillStyle = "black";
    context.textAlign = "center";

    let string = "Welcome to the Eastern Coast of Sri Lanka!"
    let angle = Math.PI * 0.6;
    let radius = 200;

    context.translate(300, 300);
    context.rotate(-1*angle/2);

    for(let i=0;i<string.length;i++){
        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1*radius);
        context.fillText(string[i],0, 0);
        context.restore();
    }

};