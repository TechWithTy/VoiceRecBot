const btn =  document.querySelector('.talk');
const content = document.querySelector('.content');

// Responses

const greetings = ['Hi there!','Whats Going on?','I am good how are you?' ];


//Weather Integration http://weatherjs.com/

//Must Change Lectures to get correct keywords
let google = 'https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures'
//

const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = ()=> {
    const element = document.querySelector(".sonar-wave1") ;
    const emitter = document.querySelector(".sonar-emitter") ;
    element.innerHTML = "Recording";
    console.log(element)
    element.classList.add("sonar-wave");
    emitter.style.backgroundColor = " red";
    elementIsClicked = true;
    console.log ('voice is activated, you can talk to me');
};

recognition.onend = ()=> {
    const element = document.querySelector(".sonar-wave1") ;
    const emitter = document.querySelector(".sonar-emitter") ;
    element.innerHTML = "Record";
    emitter.style.backgroundColor = "#ff00005c";

    element.classList.remove("sonar-wave");
    console.log ('voice is deactivated');

};

recognition.onresult = (event)=> {
    const current = event.resultIndex;
    const transcript = event.results[current[0]].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button

btn.addEventListener('click',()=>{
    recognition.start();
});

function readOutLoud(message){
    const speech= new SpeechSynthesisUtterance();
    speach.text = 'I am not sure what that means'

    if (message.includes('Hi'||'Hey'||'How`s it going'||'What`s Happening')) {
       const finatlText = grettings[Math.floor(Math.random()*greetings.length)];
        speech.finalText;
    }else if (message.includes('How are you')) {
        const finatlText = grettings[2]
        speech.finalText;
    } else if  (message.includes('Todays Date'))        {
                
        const finatlText = new Date();
        speech.finalText;
    }
     //Weather Coming Soon
    speech.volume = 1;
    speech.rate= 1;
    speech.pitch = 2;


    window.speechSynthesis.speak(speech)
}

//=====================================================

 