// console.log("hello world")
// console.log(document.getElementsByTagName("h1"))

const liCollection = document.getElementsByTagName("li");
// console.log (allHeadlines)
for (const li of liCollection) {
    // console.log(li.innerText);
}

const allHeadlines = document.getElementsByTagName ("h1")
for (const h1 of allHeadlines){
    // console.log(h1.innerText);
}

document.getElementById("title")

const sections = document.querySelectorAll ("section");
for (const section of sections){
    section.style.border = "5px solid black";
    section.style.marginBottom = "10px"
}
// 1. where
const newId = document.getElementById("title");
// 2. what
const newh1 = document.createElement("h1");
newh1.innerText = "Hello World";

// append
newId.appendChild(newh1);

const mainContent = document.getElementById ("main-content");
const newSection = document.createElement ("section")
newSection.innerText = "hello my Dear Reza"
mainContent.append(newSection)
