
document.getElementsByClassName("property-price property-info__price")[0].innerHTML += ` <br />Price Range: ${document.documentElement.innerHTML.match(/\d+(\.\d+)?(m|k)_\d+(\.\d+)?(m|k)/)[0].replace("_", " - ")} 🤫`
