var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30 ;
block_image_height = 30 ;

playar_x = 10 ;
playar_y = 10 ;

var player_object = "" ;

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL( get_image , function(Img){
        block_image_object = Img ;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);
    });  
}

function up()
{
    if(playar_y >= 0)
    {
        playar_y = playar_y - block_image_height ;
        console.log("block image height =" + block_image_height);
        console.log("When Up arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(playar_y <= 500)
    {
        playar_y = playar_y + block_image_height ;
        console.log("block image height =" + block_image_height);
        console.log("When Down arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(playar_x > 0)
    {
        playar_x = playar_x - block_image_width ;
        console.log("block image Width =" + block_image_width);
        console.log("When Left arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(playar_X <= 850)
    {
        playar_y = playar_y - block_image_width ;
        console.log("block image width =" + block_image_width);
        console.log("When ridht arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}



