// 상품명, 가격, 재고를 프로퍼티를 담고있는 object 3개 선언한다.
// 3개의 object 1개의 Array객체에 모두 담는다.
// JSON으로 변경 시킨다


// shop.json에 변환된 JSON의 형식의 문자열을 작성한다
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 재고 수를 object에 담은 뒤 sum.json으로 변환한다


function Pro(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

}

let products = [
            new Pro ('초코', 1500, 30),
            new Pro ('통크', 1200, 20),
            new Pro ('칸쵸', 1300, 10)];

let productsJSON = JSON.stringify(products);
//console.log(productsJSON);

  let file = require('fs');
 //file.writeFile('shop.json',productsJSON , 'utf-8', error => {});

 file.readFile('shop.json','utf-8',  (error, content) => {
    let products = JSON.parse(productsJSON);
});

// 총 가격과 재고 수를 object에 담은 뒤 sum.json으로 변환한다

let pricetotal = products.map(pro => pro.price).reduce((total, pro) => total + pro);
let stocktotal = products.map(pro => pro.stock).reduce((total, pro) => total + pro);

let total = {'총 가격 ' : pricetotal, '총 재고 ' : stocktotal}
let totalJSON = JSON.stringify(total);
//console.log(json);

 file.writeFile('sum.json',totalJSON, 'utf-8', error => {});
 console.log(typeof products);




//=======================================================================

// mart.push(choco, tongke, cancho);
// console.log(mart);

// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// function Product(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
// }

// let products = [
//     new Product('참후레쉬', 1500, 90),
//     new Product('참후레쉬', 1500, 60),
//     new Product('참후레쉬', 1500, 30)
// ];

// let productsJSON = JSON.stringify(products);

// // 각 상품별 총 가격을 구한 뒤 출력한다.
// // callback 함수를 사용한다.
// // 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
