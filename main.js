Webcam.set({
    width:300,
    height:400,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeshot(){
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
    recognition.start();
    console.log("started")


recognition.onresult=function(event){
event.results[0][0].transcript;  
speak();
console.log("spoke")
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    console.log("taking selphie")
    var utter_This=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_This);
    Webcam.attach(camera);
    setTimeout(function (){
     takeshot();
    },5000);
 }
}





function takeshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'" />';
    });
}
 console.log('ml5 version:', ml5.version);
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h4ouiZkHX/model.json',model_loaded);

 function model_loaded(){
    console.log('model failed but loaded');
 }
