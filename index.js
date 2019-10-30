// Write your code here!

// let element = document.createElement('div')
// document.body.append(element)
// // let elements = document.createElement('li')
// // document.body.append(elements)

// let ul = document.createElement('ul')
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.append(li)
// }
// element.append(ul)
// ul.removeChild(ul.querySelector('li:nth-child(1)'))
// ul.removeChild(ul.querySelector('li:nth-child(2)'))
// let elementt = document.querySelector("p#greeting");
// elementt.innerHTML = 'Hello, DOM!'

// let header = document.getElementById("div#header");
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

//elements.append(ul)
//elements.appendChild(ul)

// let h4 = document.createElement('h4')
// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     h4.appendChild(li)
//   }
 
// element.appendChild(h4)
document.querySelector("main#main").remove();
const newHeader = document.createElement("h1");
newHeader.id = 'victory'
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
