/* banner.html */
//  HTMLCollection.prototype.forEach = Array.prototype.forEach;
// const banner = document.querySelector("div.today-img-1");
// const imageDiv = document.querySelectorAll("div.today-img-1 div");
// const lastImageDiv = document.createElement("div");
// const firstImageDiv = document.createElement("div");
// const next = document.querySelector("div.next");
// const prev = document.querySelector("div.prev");
// const buttons = document.querySelectorAll(".buttons button");
// const bannerCount = document.querySelector("span.banner-count");
// let checkArrow = false;
// let count = 1;
// let auto = setInterval(autoSlide, 2000);
// let temp = buttons[0];

// HTMLCollection.prototype.forEach = Array.prototype.forEach;
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         clearInterval(auto);
//         count = parseInt(button.value);
//         changeButtonStyle();
//         banner.style.transition = "transform 0.3s";
//         banner.style.transform = `translate(${-540 * count}px)`;
//         auto = setInterval(autoSlide, 2000);
//     });
// });

// imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/kmong${i+1}.jpg)`)


// banner.appendChild(lastImageDiv);
// lastImageDiv.style.backgroundImage = `url(image/kmong1.jpg)`;

// banner.insertBefore(firstImageDiv, document.querySelector("div.today-img-1 div"));
// firstImageDiv.style.backgroundImage = `url(image/kmong${imageDiv.length}.jpg)`

// banner.style.transform = `translate(-540px)`;
// updateBannerCount();

// // function changeButtonStyle() {
// //     if(temp){
// //         temp.style.background = "white";
// //         temp.style.color = "black";
// //     }
// //     updateBannerCount();
// //     buttons[count - 1].style.background = "black";
// //     buttons[count - 1].style.color = "white";
// //     temp = buttons[count - 1];
// // }

// function autoSlide(){
//     banner.style.transition = "transform 0.3s";
//     banner.style.transform = `translate(${-540 * ++count}px)`;
//    // console.log(count);
//     if(count == 4) {
//         count = 1;
//         updateBannerCount();
//         setTimeout(function(){
//             banner.style.transition = "transform 0s";
//             banner.style.transform = "translate(-540px)";
//         }, 300);
//     }
//     updateBannerCount();
// }

// prev.addEventListener("click", function(){
//     if(checkArrow){return;}
//     checkArrow = true;
//     clearInterval(auto);
//     banner.style.transition = "transform 0.3s";
//     banner.style.transform = `translate(${-540 * --count}px)`;
//     if(count == 1) {
//         count = 4;
//         /* updateBannerCount(); */
//         setTimeout(function(){
//             banner.style.transition = "transform 0s";
//             banner.style.transform = `translate(${-540 * (imageDiv.length)}px)`;
//         }, 300);
//     }
//     /*  updateBannerCount(); */
//     changeButtonStyle();
//     auto = setInterval(autoSlide, 2000);
//     setTimeout(()=>{checkArrow = false}, 300);
// });

// next.addEventListener("click", function(){
//     if(checkArrow){return;}
//     checkArrow = true;
//     clearInterval(auto);
//     banner.style.transition = "transform 0.3s";
//     banner.style.transform = `translate(${-540 * ++count}px)`;
//     if(count == 4) {
//         count = 1;
//         setTimeout(function(){
//             banner.style.transition = "transform 0s";
//             banner.style.transform = "translate(-540px)";
//         }, 300);
//     }
    
//    /*  changeButtonStyle(); */
//     auto = setInterval(autoSlide, 2000);
//     setTimeout(()=>{checkArrow = false}, 300);
// });

// function updateBannerCount() {
//     bannerCount.innerHTML = `${count} / ${imageDiv.length}`;
// }

 

// 자동 글자 기능
let input = $('.banner-input');
let isFocus = false;
const $text = document.querySelector('.text');

window.onload = function () {
    typeText();
};

input.focus(function () {
    $text.style.display = 'none';
});

input.blur(function () {
    $text.style.display = 'inline';
});

function typeText() {
    // 글자 모음
    const letters = ['홈페이지', '심리상담', '쇼핑몰', '전자책'];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 줄바꿈을 위한 <br> 치환
    const changeLineBreak = (letter) => {
        return letter.map((text) => (text === '\n' ? '<br>' : text));
    };

    // 타이핑 효과
    const typing = async () => {
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(''));

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    };

    // 글자 지우는 효과
    const remove = async () => {
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(''));

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join('');
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    };

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }

    // 초기 실행
    setTimeout(typing, 1500);
}


