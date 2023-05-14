//상품명, 가격 재고를 JS 객체에 프로퍼티로 담는다
// JSON 형식으로 변환한뒤 , product.json으로 출력한다
// product. json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.

// function Product(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;

// }

// let products = [
//     new Product('초코', 1500, 90),
//     new Product('칸쵸', 1500, 60),
//     new Product('키켓', 1500, 30)
// ];

// let productsJSON = JSON.stringify(products);

// let file = require('fs');

// file.writeFile('products.json', productsJSON, 'utf-8', function(error))

// file.readFile('products.json', 'utf-8', fuction(error, content))
//     if(error){
//         console.log(error);
//     }else{
//         console.log(content);
//     }



    // 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
let file = require('fs');
let product = {name: '지우개', price: 300, stock: 35000};
file.writeFile('product.json', JSON.stringify(product), 'utf-8', error => {});
file.readFile('product.json', 'utf-8', (error, content) => {
    console.log(JSON.parse(content));
});

