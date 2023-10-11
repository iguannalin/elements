window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  // window.addEventListener("keypress", (k) => {
  //   const kbd = document.createElement("kbd");
  //   console.log(k);
  //   kbd.innerText = k.keyCode;
  //   container.appendChild(kbd);
  // })
  // elements scraped from - https://www.w3.org/TR/2012/WD-html-markup-20121025/elements.html
  fetch("elements.json").then((r) => r.json()).then((d) => {
    Array.from(d).forEach((elem) => {
      const el = document.createElement(elem);
      el.innerText = "quick fox";
      container.appendChild(el);
    })
  })
});
