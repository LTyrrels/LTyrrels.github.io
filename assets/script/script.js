function copyDiscord(event){
  // event.preventdefault();
  navigator.clipboard.writeText('667#7776').then(
    () => { alert('Discord copié !');},
    () => {});
}

let audio = document.getElementById("audio")[0];
audio.play();

function play(){
  let audio = document.getElementById("audio")[0];
  audio.play();
}