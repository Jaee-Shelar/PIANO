const pianokeys=document.querySelectorAll(".piano-keys .key");
const volumeSlider =document.querySelector(".volume-slider input");

let allKeys =[],
 audio=new Audio("a.wav");

const playTune=(key)=> {
    audio.src=`${key}.wav`;
    audio.play();
    console.log(allKeys);

    const clickedKey=document.querySelectorAll(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
     clickedKey.classList.remove("active");
 },150);
}
pianokeys.forEach(key=>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click",() => playTune(key.dataset.key));
    
    
});
const pressdKey=(e)=>{
    if(allKeys.includes(e.key))playTune(e.key);
}
document.addEventListener("keydown",pressdKey);
