objects = [];
Status = "";

function setup()
{
    canvas = createCanvas( 850, 500);
    canvas.center();

    cocossd = ml5.objectDetector("cocossd", modelready);   

    document.getElementById("status").innerHTML = " status: detecting object "
}

function modelready()
{
    console.log("model is ready");
    Status = true;
    cocossd.detect(image1, gotresults);
}

function gotresults(error, results)
{
    if (error) 
    {
        console.log("error");
    }

    console.log(results);
    objects = results;
}

function draw()
{
    image(image1, 0, 0, 850, 500);
    noFill();
    text( "baby", 170, 170);
    rect(150, 150,250, 350)
    
    stroke("blue");
    if (Status != "") 
    {

        for(i = 0; i < objects.length; i++)
        { 
            percent = Math.floor(objects[i].confidence * 100)
            document.getElementById("status").innerHTML = "Status Baby detected";
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            text(objects[i].label + " "+ percent +" %", objects[i].x + 20, objects[i].y + 20);
        }
    }
}

function preload()
{
    image1 = loadImage("living room.jpg");
    // play("alarm.mp3")
}