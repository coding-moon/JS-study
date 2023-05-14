// 상품명과 가격을 json으로 만든다
// 위 JSON을 JS Object 객체로 변환한다
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다

let pro = {name: "통크", price: 2000};
let proJSON = JSON.stringify(pro);
pro = JSON.parse(proJSON);

//console.log(pro);
console.log(proJSON);
console.log(pro.name, pro.price);
console.log(pro);


et productJSON = `{"name": "마우스", "price": 25000}`;
let product = JSON.parse(productJSON);

with(console){
    log(product.name);
    log(product.price);
}
productJSON = JSON.stringify(product);

console.log(productJSON);


