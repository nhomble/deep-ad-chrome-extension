const observer = new MutationObserver((mutations, obs) => {
  const ads = document.getElementsByClassName("ad-banner-container");
  for (const ad of ads) {
    ad.remove();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});
