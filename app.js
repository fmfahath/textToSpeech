let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");

let voices = [];

//convert textarea text to speech by clicking listen button
document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

//get pre-default voices from the device and load them into select element
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  //set the first voice as default voice from the array list

    // console.dir(voices);

    voices.forEach((voice, i) => { //load voices into select element
        voiceSelect.options[i] = new Option(voice.name, i)
    });
}

//change event for different voice from select option
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});
