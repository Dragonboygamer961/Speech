 
var SpeechRecognition = window.webkitSpeechRecognition;
  
var my_agent = new SpeechRecognition();

 function my_start(){

    document.getElementById("text").value = "";

    my_agent.start();
 }

 my_agent.onresult = function (event){
console.log(event);

 }