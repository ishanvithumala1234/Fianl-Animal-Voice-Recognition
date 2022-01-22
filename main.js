function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true,video:false});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/T3p6zm9t4/model.json", modelLoaded);  
}

function modelLoaded() {
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;

function gotResults(error, results)
{
    if(error){
        console.error(error);    
    }
else {
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="Detected Voice if of - " + results[0].label;
    document.getElementById("result_count").innerHTML="Detected Dog - " + dog + "Detected Cat - " + cat;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_count").style.color="rgb("+r+","+g+","+b+")";
    img = document.getElementById("animal_image");
    if(result[0].label=="Barking"){
        img.src = "200.gif";
        dog=dog+1;
    }
    else if(result[0].label=="Meowing"){
        img.src = "meow.gif";
        cat=cat+1;
    }
    else {
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif"
    }
}
}