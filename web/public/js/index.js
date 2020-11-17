function getData(...optios) {
  fetch("http://localhost:3333/")
    .then((res) => res.json().then(makeDOM))
    .catch(console.log);
}

function makeDOM(args) {
  const body = "background-color: rgb(225 219 247)";
  const style = `color:rgb(62 45 45); font-size:x-large`;
  const root = document.getElementById("h1_heading");
  
  document.body.style = body;
  root.style = style;
  root.innerHTML = root || "OFF";
}

window.onload = makeDOM;
