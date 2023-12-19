const container = document.querySelector("#container");

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.cssText = "color: red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue";

const div = document.createElement('div');
div.style.cssText = "border: solid black 2px; background-color: pink;"

container.appendChild(red);
container.appendChild(h3);


const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);