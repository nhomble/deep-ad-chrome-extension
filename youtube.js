const observer = new MutationObserver((mutations, obs) => {
    const videoCards = $("div.ytd-rich-item-renderer");
    for (let node of videoCards) {
        const findAds = node.getElementsByClassName("ytd-display-ad-renderer");
        if(findAds && findAds.length > 0){
            console.log("Removing ad generated node: " + node);
            node.style.display = "none";
        }
    }
  });
  
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  });