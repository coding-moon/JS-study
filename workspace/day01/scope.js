var x = 20;

    // global.x = 20; Node.js에서의 최상위 객체(전역 객체)
    // window.x= 20; 브라우저에서의 최상위 객체(전역 객체)
    // globalThis.x = 20; global과 window객체를 상황에 맞게 사용해주는 전역 객체


function f() {
  //  var x = 10;
  //  console.log(x);
    // console.log(this.x);
}

f();