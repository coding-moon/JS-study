let account = {
    owner: "한동석",
    password: "1234",
    account: "110-11-12318912"
};
console.log(account);

account.age = 20;
console.log(account.age);

account.money = 10000;
account.deposit = function(money){this.money += money;}

account.deposit(30000);
console.log(`${account.money}원`);

// (function(){})() 선언과 동시에 사용

(function(expression){
    console.log(eval(expression));
})("2+3*6-7");

(function(string){
    console.log(parseInt(string) === 34);
})("34");

(function(value){
    console.log(isNaN(value));
    console.log(isFinite(value));
})("hello" / 3);

let test = 10;

(function(value){
    console.log(isNaN(value));
    console.log(isFinite(value));
})(parseInt(test));