Canvas = document.getElementById("myCanvas");
Ctx = Canvas.getContext("2d");
Color = "Red";
Ctx.beginPath();
Ctx.strokeStyle = Color;
Ctx.lineWidth = 2;
Ctx.arc(400, 300, 40, 0, 2 * Math.PI);
Ctx.stroke();
Canvas.addEventListener("mousedown", my_mousedone);

function my_mousedone(e) {
    mouse_x = e.clientX - Canvas.offsetLeft;
    mouse_y = e.clientY - Canvas.offsetTop;
    circle(mouse_x, mouse_y)
}

function circle(mouse_x, mouse_y) {
    Color = "Red";
    Ctx.beginPath();
    Ctx.strokeStyle = Color;
    Ctx.lineWidth = 2;
    Ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    Ctx.stroke();
}