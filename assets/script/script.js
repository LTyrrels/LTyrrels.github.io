function copyDiscord(event){
  // event.preventdefault();
  navigator.clipboard.writeText('667#7776').then(
    () => { alert('Discord copié !');},
    () => {});
}