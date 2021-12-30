const observer = new MutationObserver((mutations, obs) => {
  // search ads
  const ads = document.getElementsByClassName("uEierd");
  for(const ad of ads){
    ad.remove();
  }

  // buy cards
  const cards = document.getElementById("taw");
  if(cards){
    cards.remove();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});
