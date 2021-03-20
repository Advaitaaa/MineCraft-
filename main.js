var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;

var player_object="";

body{
	background-image: URL("https://postimg.cc/Kkn0KgMB");
	background-position: center;
	background-size: cover; 
}

function player_update(){
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
    canvas.add(player_object);
    
    });

}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	var key_pressed=e.keyCode;
	console.log (key_pressed);
}

		if(key_pressed=="38")
		{
			up();
			console.log("up");
		}

		if(key_pressed=="40")
		{
			down();
			console.log("down");
		}
		if(key_pressed=="37")
		{
			left();
			console.log("left");
		}
		if(key_pressed=="39")
		{
			right();
			console.log("right");
		}
} 

function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y=player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When down arrow key is pressed, X = " +player_x +", Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >=0)
	{
		player_x=player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When left arrow is pressed, Y = "+player_y +",X = "+player_x);
		canvas.remove(player_object);
		player_update();
	}
}
