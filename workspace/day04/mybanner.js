/* mybanner.html */

/* 
    Interval
    setInterval
    Insertbefore
    
*/

HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll(".buttons button");
const container = document.querySelector('section.container');
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";
        banner.style.transform = `translate(${-1728 * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/00${i+1}.jpg)`)

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(image/001.jpg)`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));
firstImageDiv.style.backgroundImage = `url(image/00${imageDiv.length}.jpg)`

banner.style.transform = `translate(-1728px)`;
document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;


// function changeButtonStyle() {
//     if(temp){
//         temp.style.background = "white";
//         temp.style.color = "black";
//     }
//     document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
    
//     buttons[count - 1].style.background = "black";
//     buttons[count - 1].style.color = "white";
//     temp = buttons[count - 1];
// }

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    console.log(count);
    
    if(count == 16) {
        count = 1;
        document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
    document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
    
    
    // changeButtonStyle();
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * --count}px)`;
    if(count == 0) {
        count = 15;
        document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-1728 * (imageDiv.length)}px)`;
        }, 300);
    }
    document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
  //  changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    document.getElementById('page').innerHTML=`${count} / ${imageDiv.length}`;
    if(count == 15) {
        count = 0;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
   // changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

container.addEventListener('mouseover', function() {
    prev.style.opacity = 1;
    next.style.opacity = 1;
})

container.addEventListener('mouseout', function() {
    prev.style.opacity = 0;
    next.style.opacity = 0;
})

