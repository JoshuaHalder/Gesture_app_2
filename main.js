var prediction_1=" ";
var prediction_2=" ";
 Webcam.set({
     width : 350 ,
     height : 350 , 
     image_format : 'png',
     png_quality : 90
 });

 var camera=document.getElementById("camera");
 Webcam.attach('#camera');

 function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_URI+'"/>';
    });
 }

 console.log('ml5 version',ml5.version);
 
 var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GjbNS0xk5/model.json",modelLoaded);

 function modelLoaded(){
     console.log('model Loded');
 }

 function speak(){
     var sinth=Window.speechSynthesis;
     var speak_data_1="The first Prediction"+prediction_1;
     var speak_data_2="The first Prediction"+prediction_2;
     var utter=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
     sinth.speak(utter);
 }